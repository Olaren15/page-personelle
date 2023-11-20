import { ImportMetaEnv } from "astro/client";

interface ImportMetaEnv {
  readonly ENABLE_ANALYTICS: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
