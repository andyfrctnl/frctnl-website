import { Resend } from "resend";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, service, budget, message } = body as Record<
    string,
    string
  >;

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

  return Response.json({ ok: true });
}
