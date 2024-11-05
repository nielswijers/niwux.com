import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      technologies: z.array(z.string()),
      type: z.string(),
      description: z.string(),
      client: z.string(),
      date: z.date(),
      featured: z.boolean(),
      image: image(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
