import { Type, validateBody } from "h3-typebox";
import { defineEventHandler, H3Event } from "h3";
import { ContactEmailContent } from "~/server/models/contact-email-content";
import { EmailService } from "~/server/service/email-service";

const emailRegexSource =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/u;
const emailRegex = emailRegexSource.source;

export default defineEventHandler(async (event: H3Event) => {
  const body: ContactEmailContent = await validateBody(
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

  await EmailService.sendContactEmail(body);

  return null;
});
