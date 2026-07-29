import { Resend } from "resend";
import { site } from "@/lib/site";

const HUBSPOT_API = "https://api.hubapi.com";

async function syncToHubSpot({
  name,
  email,
  phone,
  company,
  service,
  budget,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) return;

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const [firstname, ...rest] = name.trim().split(/\s+/);
  const lastname = rest.join(" ");

  const properties: Record<string, string> = {
    email,
    firstname,
    ...(lastname && { lastname }),
    ...(phone && { phone }),
    ...(company && { company }),
  };

  // Find an existing contact by email so repeat inquiries update the same
  // record instead of erroring on a duplicate.
  const searchRes = await fetch(
    `${HUBSPOT_API}/crm/v3/objects/contacts/search`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        filterGroups: [
          { filters: [{ propertyName: "email", operator: "EQ", value: email }] },
        ],
        limit: 1,
      }),
    }
  );
  const searchData = await searchRes.json();
  const existingId = searchData?.results?.[0]?.id as string | undefined;

  let contactId = existingId;

  if (existingId) {
    await fetch(`${HUBSPOT_API}/crm/v3/objects/contacts/${existingId}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ properties }),
    });
  } else {
    const createRes = await fetch(`${HUBSPOT_API}/crm/v3/objects/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify({ properties }),
    });
    const createData = await createRes.json();
    if (!createRes.ok) {
      console.error("HubSpot contact create error:", createData);
      return;
    }
    contactId = createData.id;
  }

  if (!contactId) return;

  // Log the inquiry details as a note on the contact so context isn't lost.
  const noteLines = [
    service && `Service: ${service}`,
    budget && `Budget: ${budget}`,
    "",
    message,
  ].filter(Boolean);

  await fetch(`${HUBSPOT_API}/crm/v3/objects/notes`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      properties: {
        hs_note_body: noteLines.join("\n"),
        hs_timestamp: Date.now(),
      },
      associations: [
        {
          to: { id: contactId },
          types: [
            {
              associationCategory: "HUBSPOT_DEFINED",
              associationTypeId: 202,
            },
          ],
        },
      ],
    }),
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, company, service, budget, message } =
    body as Record<string, string>;

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return Response.json(
      { error: "Email is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    company && `Company: ${company}`,
    service && `Service: ${service}`,
    budget && `Budget: ${budget}`,
    "",
    message,
  ].filter(Boolean);

  const { error } = await resend.emails.send({
    from: `${site.name} Website <website@frctnlusa.com>`,
    to: site.email,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: lines.join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 }
    );
  }

  // Best-effort CRM sync — a HubSpot hiccup shouldn't fail the whole
  // submission when the email already went out successfully.
  try {
    await syncToHubSpot({
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
    });
  } catch (hubspotError) {
    console.error("HubSpot sync error:", hubspotError);
  }

  return Response.json({ ok: true });
}
