import { defineCollection, z } from "astro:content";

const collectionAPropos = defineCollection({
  type: "content",
  schema: z.object({
    titre: z.string(),
  }),
});

export const collections = {
  "a-propos": collectionAPropos,
};
