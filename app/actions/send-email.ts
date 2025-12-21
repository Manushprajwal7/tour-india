"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: any) {
  const {
    fullName,
    email,
    phone,
    tripInterest,
    destination,
    numberOfTravelers,
    adults,
    children,
    tripType,
    budget,
    otherRequirements,
  } = formData;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "tourindia.murugan@gmail.com",
    subject: `New Trip Enquiry from ${fullName}`,
    html: `
      <h2>New Trip Enquiry</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Trip Interest:</strong> ${tripInterest}</p>
      <p><strong>Destination:</strong> ${destination}</p>
      <p><strong>Number of Travelers:</strong> ${numberOfTravelers} (Adults: ${adults}, Children: ${children})</p>
      <p><strong>Trip Type:</strong> ${tripType}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Other Requirements:</strong> ${otherRequirements}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
}
