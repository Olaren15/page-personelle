/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ENABLE_ANALYTICS: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
