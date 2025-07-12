//import sgMail from "@sendgrid/mail";
import sgMail from "@sendgrid/mail"
import dotenv from "dotenv";

dotenv.config();

const sgMail = sgMail.setApiKey(process.env.SENDGRID_API_KEY); // ✅ Correct env var

export const sendEmail = async ({ to, subject, html, text }) => {
  const msg = {
    to,
    from: process.env.EMAIL_FROM, // ✅ Verified sender domain (like no-reply@lakenah.com)
    subject,
    text: text || "",
    html,
  };

  try {
    await sgMail.send(msg);
    console.log(`📧 Email sent to ${to}`);
  } catch (error) {
    console.error("SendGrid error:", error.response?.body || error.message);
    throw new Error("Failed to send email");
  }
};


