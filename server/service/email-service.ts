import { createTransport } from "nodemailer";
import { useRuntimeConfig } from "#imports";
import { ContactEmailContent } from "~/server/models/contact-email-content";
import { emailTemplate } from "~/server/hbs/email-template";
import { newLineToBrHelper } from "~/server/hbs/new-line-to-br-helper";

const config = useRuntimeConfig();
const transporter = createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  auth: {
    user: config.smtp.username,
    pass: config.smtp.password,
  },
});

export const EmailService = {
  sendContactEmail: async (content: ContactEmailContent) => {
    await transporter.sendMail({
      from: {
        name: `${content.firstName} ${content.lastName}`,
        address: "noreply@olaren.dev",
      },
      to: "catherine.gilbert15@gmail.com",
      subject: content.subject,
      html: emailTemplate(content, {
        helpers: newLineToBrHelper,
      }),
    });
  },
};
