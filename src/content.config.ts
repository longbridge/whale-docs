import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { fileURLToPath } from 'node:url';

export const collections = {
  docs: defineCollection({
    loader: glob({
      base: fileURLToPath(new URL('../.astro-content', import.meta.url)),
      pattern: '{en,zh-cn,zh-hk}/**/[^_]*.{md,mdx}',
    }),
    schema: docsSchema(),
  }),
};
