// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
import type { ImportMetaEnv } from "astro/client";

interface ImportMetaEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
