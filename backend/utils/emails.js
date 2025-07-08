// utils/emails.js

import transporter from "./mailer.js";
import dotenv from "dotenv";


dotenv.config();



import { WELCOME_EMAIL_TEMPLATE , PASSWORD_RESET_CODE_TEMPLATE , PASSWORD_RESET_CONFIRMATION_TEMPLATE} from "./emailTemplates.js";



export const sendWelcomeEmail = async (to, name) => {
  const html = WELCOME_EMAIL_TEMPLATE(name);

  const mailOptions = {
    from: `"notenesty" <${process.env.SENDER_EMAIL}>`,
    to,
    subject: "Welcome to notenesty!",
    html,
  };

  // ✅ RETURN the promise
  return transporter.sendMail(mailOptions);
};
export const sendPasswordResetCodeEmail = async (to, code) => {
  const html = PASSWORD_RESET_CODE_TEMPLATE(code);

  const mailOptions = {
    from: `"notenesty" <${process.env.SENDER_EMAIL}>`,
    to,
    subject: "Password Reset Code",
    html,
  };

  return transporter.sendMail(mailOptions);
};

export const sendPasswordResetConfirmationEmail = async (to, name) => {
  const html = PASSWORD_RESET_CONFIRMATION_TEMPLATE(name);

  const mailOptions = {
    from: `"notenesty" <${process.env.SENDER_EMAIL}>`,
    to,
    subject: "Your Password Has Been Reset",
    html,
  };

  return transporter.sendMail(mailOptions);
};

export const sendContactFormEmail = async (name, email, message) => {
  const html = `
    <h3>New Contact Form Message</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
  `;

  const mailOptions = {
    from: `"notenesty" <${process.env.SENDER_EMAIL}>`,  // Your verified sender
    to: process.env.CONTACT_EMAIL,
    subject: 'New Contact Form Message',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html,
    replyTo: `${name} <${email}>`,  // Allows direct reply to user
  };

  return transporter.sendMail(mailOptions);
};
export const sendContactAutoReply = async (to, name) => {
  const html = `
    <p>Hi ${name},</p>
    <p>Thank you for contacting us. We have received your message and will respond as soon as possible.</p>
    <p>Best regards,<br/>The Notenesty Team</p>
  `;

  const mailOptions = {
    from: `"notenesty" <${process.env.SENDER_EMAIL}>`,
    to,
    subject: "Thanks for contacting Notenesty!",
    html,
  };

  return transporter.sendMail(mailOptions);
};
