import { z, defineCollection } from "astro:content";
const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    updated: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    readingTime: z.string().optional(),
    canonical: z.string().url().optional(),
    cover: z.string().optional()
  })
});
export const collections = { posts };
