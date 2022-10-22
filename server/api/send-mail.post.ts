import { CompatibilityEvent, defineEventHandler } from "h3";
import { Type, validateBody } from "h3-typebox";
import { createTransport } from "nodemailer";
import Handlebars from "handlebars";
import { useRuntimeConfig } from "#imports";

const emailRegexSource =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/u;
const emailRegex = emailRegexSource.source;

const config = useRuntimeConfig();
const transporter = createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  auth: {
    user: config.smtp.username,
    pass: config.smtp.password,
  },
});

const emailTemplate = Handlebars.compile(
  "<h1>Message de {{ firstName }} {{ lastName }}</h1><p>{{ text }}</p><p>Contacter à <a href='mailto:{{ email }}'>{{ email }}</a></p>"
);
const nameTemplate = Handlebars.compile("{{ firstName }} {{ lastName }}");
const subjectTemplate = Handlebars.compile("{{ subject }}");

export default defineEventHandler(async (event: CompatibilityEvent) => {
  const body = await validateBody(
    event,
    Type.Object({
      firstName: Type.String({
        minLength: 1,
        maxLength: 100,
      }),
      lastName: Type.String({
        minLength: 1,
        maxLength: 100,
      }),
      email: Type.String({
        pattern: emailRegex,
        minLength: 1,
        maxLength: 100,
      }),
      subject: Type.String({
        minLength: 1,
        maxLength: 100,
      }),
      text: Type.String({
        minLength: 1,
        maxLength: 2000,
      }),
    })
  );

  await transporter.sendMail({
    from: {
      name: nameTemplate(body),
      address: "noreply@olaren.dev",
    },
    to: "catherine.gilbert15@gmail.com",
    subject: subjectTemplate(body),
    html: emailTemplate(body),
  });

  return null;
});
