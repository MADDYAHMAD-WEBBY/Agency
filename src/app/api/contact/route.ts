import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      type = "message",
      name,
      email,
      service,
      budget,
      content,
      selectedDate,
      selectedTime,
      timezone,
      selectedDeal,
      propertyName,
      city,
      bookingChannels,
      monthlyBookings,
      contactNumber,
    } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email address is required." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER || "info@mhkmarkedia.com";
    const pass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_NOTIFICATION_EMAIL || user;

    if (!pass) {
      console.warn("SMTP_PASS is not configured in environment variables.");
      return NextResponse.json(
        {
          success: false,
          error: "SMTP server credentials are not fully configured. Please set SMTP_PASS in .env.local",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // SSL for 465, STARTTLS for 587
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    let subject = "";
    let adminHtml = "";
    let confirmationHtml = "";

    if (type === "booking") {
      subject = `📅 [30-Min Call Booking] ${name || "Client"} - ${selectedDate || "Date TBD"}`;
      adminHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #8B3DFF, #635BFF); padding: 24px 32px; color: #ffffff;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">New Strategy Call Scheduled</h1>
            <p style="margin: 6px 0 0; opacity: 0.85; font-size: 13px;">Received from mhkmarkedia.com/contact</p>
          </div>
          
          <div style="padding: 28px 32px; color: #18181b;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; width: 140px; font-weight: 600;">Client Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600;">${name || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-weight: 600;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5;"><a href="mailto:${email}" style="color: #8B3DFF; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-weight: 600;">Scheduled Date:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600; color: #059669;">${selectedDate || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-weight: 600;">Time Slot:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600; color: #059669;">${selectedTime || "N/A"} (${timezone || "Timezone N/A"})</td>
              </tr>
              ${selectedDeal ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-weight: 600;">Selected Package:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: 700; color: #8B3DFF;">${selectedDeal}</td>
              </tr>
              ` : ""}
            </table>

            <div style="margin-top: 24px; padding: 18px; background: #faf5ff; border: 1px solid #f3e8ff; border-radius: 12px;">
              <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; color: #7e22ce; text-transform: uppercase; letter-spacing: 0.5px;">Project Notes / Brief:</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #3b0764; white-space: pre-wrap;">${content || "No extra notes provided."}</p>
            </div>

            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: #8B3DFF; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 600; padding: 12px 28px; border-radius: 9999px;">
                Reply Directly to ${name || "Client"}
              </a>
            </div>
          </div>
        </div>
      `;

      confirmationHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #8B3DFF, #635BFF); padding: 24px 32px; color: #ffffff;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 700;">Discovery Call Scheduled!</h1>
            <p style="margin: 6px 0 0; opacity: 0.85; font-size: 13px;">MHKMarkedia Strategy Consultation</p>
          </div>
          <div style="padding: 28px 32px; color: #18181b;">
            <p style="font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
              Hi <strong>${name || "there"}</strong>,
            </p>
            <p style="font-size: 14px; line-height: 1.6; color: #52525b; margin: 0 0 20px;">
              Your 30-minute consultation has been scheduled. I am looking forward to discussing your digital architecture, custom web dev, or local SEO roadmap.
            </p>
            <div style="background: #faf5ff; border: 1px solid #f3e8ff; border-radius: 12px; p: 16px; padding: 16px 20px; margin-bottom: 24px;">
              <p style="margin: 0 0 6px; font-size: 14px; font-weight: 600; color: #7e22ce;">📅 ${selectedDate}</p>
              <p style="margin: 0; font-size: 14px; color: #3b0764;">⏰ ${selectedTime} (${timezone})</p>
              <p style="margin: 6px 0 0; font-size: 12px; color: #6b21a8;">Platform: Google Meet (link will be sent prior to the call)</p>
            </div>
            <p style="font-size: 13px; line-height: 1.6; color: #71717a; margin: 0;">
              Best regards,<br />
              <strong>M. Hafeez Khan</strong><br />
              CEO & Lead Architect | MHKMarkedia<br />
              <a href="https://mhkmarkedia.com" style="color: #8B3DFF; text-decoration: none;">mhkmarkedia.com</a>
            </p>
          </div>
        </div>
      `;
    } else if (type === "audit") {
      subject = `🏨 [Growth Audit Request] ${propertyName || name || "Property"} - ${city || ""}`;
      adminHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #8B3DFF, #635BFF); padding: 24px 32px; color: #ffffff;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 700;">New Growth Audit Request</h1>
            <p style="margin: 6px 0 0; opacity: 0.85; font-size: 13px;">Hospitality Direct Booking Blueprint</p>
          </div>
          <div style="padding: 28px 32px; color: #18181b;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #71717a; font-weight: 600;">Property:</td><td style="padding: 8px 0; font-weight: 600;">${propertyName || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; color: #71717a; font-weight: 600;">City:</td><td style="padding: 8px 0;">${city || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; color: #71717a; font-weight: 600;">Channels:</td><td style="padding: 8px 0;">${bookingChannels || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; color: #71717a; font-weight: 600;">Monthly Bookings:</td><td style="padding: 8px 0;">${monthlyBookings || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; color: #71717a; font-weight: 600;">WhatsApp / Phone:</td><td style="padding: 8px 0; font-weight: 600; color: #059669;">${contactNumber || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; color: #71717a; font-weight: 600;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #8B3DFF;">${email}</a></td></tr>
            </table>
          </div>
        </div>
      `;
    } else {
      // Default: Direct Message
      subject = `💬 [New Project Inquiry] ${name || "Client"} - ${service || "General Inquiry"}`;
      adminHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #8B3DFF, #635BFF); padding: 24px 32px; color: #ffffff;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">New Project Inquiry</h1>
            <p style="margin: 6px 0 0; opacity: 0.85; font-size: 13px;">Received via MHKMarkedia Direct Message</p>
          </div>
          
          <div style="padding: 28px 32px; color: #18181b;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; width: 140px; font-weight: 600;">Client Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600;">${name || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-weight: 600;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5;"><a href="mailto:${email}" style="color: #8B3DFF; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-weight: 600;">Service Required:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600; color: #8B3DFF;">${service || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-weight: 600;">Estimated Budget:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600; color: #059669;">${budget || "Not specified"}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 18px; background: #faf5ff; border: 1px solid #f3e8ff; border-radius: 12px;">
              <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; color: #7e22ce; text-transform: uppercase; letter-spacing: 0.5px;">Project Details:</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #3b0764; white-space: pre-wrap;">${content || "No details provided."}</p>
            </div>

            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: #8B3DFF; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 600; padding: 12px 28px; border-radius: 9999px;">
                Reply Directly to ${name || "Client"}
              </a>
            </div>
          </div>
        </div>
      `;

      confirmationHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #8B3DFF, #635BFF); padding: 24px 32px; color: #ffffff;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 700;">Inquiry Received!</h1>
            <p style="margin: 6px 0 0; opacity: 0.85; font-size: 13px;">MHKMarkedia Digital Architecture</p>
          </div>
          <div style="padding: 28px 32px; color: #18181b;">
            <p style="font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
              Hi <strong>${name || "there"}</strong>,
            </p>
            <p style="font-size: 14px; line-height: 1.6; color: #52525b; margin: 0 0 20px;">
              Thank you for reaching out. I have received your project details regarding <strong>${service || "your project"}</strong>.
            </p>
            <p style="font-size: 14px; line-height: 1.6; color: #52525b; margin: 0 0 24px;">
              I will personally review your requirements and respond within 24 hours with actionable technical insights and next steps.
            </p>
            <p style="font-size: 13px; line-height: 1.6; color: #71717a; margin: 0;">
              Best regards,<br />
              <strong>M. Hafeez Khan</strong><br />
              CEO & Lead Architect | MHKMarkedia<br />
              <a href="https://mhkmarkedia.com" style="color: #8B3DFF; text-decoration: none;">mhkmarkedia.com</a>
            </p>
          </div>
        </div>
      `;
    }

    // 1. Send notification to admin / owner
    await transporter.sendMail({
      from: `"MHKMarkedia Form" <${user}>`,
      to: recipient,
      replyTo: email,
      subject,
      html: adminHtml,
    });

    // 2. Optionally send auto-confirmation email to visitor
    if (confirmationHtml && email) {
      try {
        await transporter.sendMail({
          from: `"MHKMarkedia" <${user}>`,
          to: email,
          subject: type === "booking" ? "Your Strategy Call Confirmation | MHKMarkedia" : "We received your message | MHKMarkedia",
          html: confirmationHtml,
        });
      } catch (clientEmailErr) {
        // Non-blocking error if client auto-reply fails
        console.warn("Client auto-reply delivery failed:", clientEmailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Message dispatched successfully.",
    });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to send email. Please check SMTP configuration.",
      },
      { status: 500 }
    );
  }
}
