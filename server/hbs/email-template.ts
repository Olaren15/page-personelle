import Handlebars from "handlebars";

export const emailTemplate = Handlebars.compile(
  ` <h1>
     Message de {{ firstName }} {{ lastName }}
    </h1>
    <p>
      {{nl2br text}}
    </p>
    <p>
      Contacter à <a href="mailto:{{ email }}">{{ email }}</a>
    </p>`
);
