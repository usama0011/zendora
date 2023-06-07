import nodemailer from "nodemailer";

export async function sendEmail(name, email, subject, message) {
  // Create a transporter with your SMTP configuration
  const transporter = nodemailer.createTransport({
    host: "SMTP", // Replace with your SMTP server hostname
    port: 465, // Replace with the appropriate port for your SMTP server
    secure: false, // set to true if using a secure connection (TLS/SSL)
    auth: {
      user: "info@zendorasalon.com", // Replace with the email address for sending emails
      pass: "Zendora2415!", // Replace with the email password
    },
  });

  // Construct the email message
  const mailOptions = {
    from: "info@zendorasalon.com",
    to: "info@zendorasalon.com",
    subject: subject,
    text: `Client Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
}
