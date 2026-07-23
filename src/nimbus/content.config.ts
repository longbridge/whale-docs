import { defineCollection, z } from "astro:content";
import { docsCollection } from "nimbus-docs/content";

/** Whale content stays in the repository-level docs/{en,zh-CN,zh-HK} tree. */
export const collections = {
  docs: defineCollection(
    docsCollection({
      base: "../../docs",
      strictFrontmatter: false,
      schemaFields: {
        openapi: z.string().optional(),
        wide: z.boolean().optional(),
        feedback: z.boolean().default(true),
      },
    }),
  ),
};
