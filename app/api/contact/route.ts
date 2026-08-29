import { NextResponse } from "next/server";
import { ContactFormSchema } from "@/lib/schema";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate payload against shared Zod schema
    const validationResult = ContactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check form entries.",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, phone, service, message, website } = validationResult.data;

    // Honeypot spam check (if website is filled, silently reject or pretend success)
    if (website && website.length > 0) {
      return NextResponse.json({ success: true, message: "Request received." });
    }

    // Check for Resend API Key
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "NForce One Inquiries <onboarding@resend.dev>",
        to: process.env.CONTACT_NOTIFICATION_EMAIL || "contact@nforce.one",
        replyTo: email,
        subject: `[New Lead] ${company} - ${service} Consultation Request`,
        text: `New consultation request from NForce One website:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone || "N/A"}\nService: ${service}\n\nMessage:\n${message}`,
      });
    } else {
      // In development / before API key is provided, log to console
      console.log("[NForce One Contact Form Submission]:", {
        name,
        email,
        company,
        phone,
        service,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully submitted.",
    });
  } catch (error: unknown) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error while processing request.",
      },
      { status: 500 }
    );
  }
}
