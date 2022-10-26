import Handlebars from "handlebars";

export const newLineToBrHelper: Handlebars.HelperDeclareSpec = {
  nl2br: (text) => {
    const withBr = Handlebars.escapeExpression(text).replace(
      /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
      "$1<br>$2"
    );
    return new Handlebars.SafeString(withBr);
  },
};
