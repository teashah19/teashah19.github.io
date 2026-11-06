import { defineCollection, z } from 'astro:content';

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.number().min(0).max(5),
    review: z.string(),
    dateRead: z.string(),
    cover: z.string().optional(),
    genre: z.string().optional(),
  }),
});

const travel = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),
    highlights: z.array(z.string()).optional(),
  }),
});

export const collections = {
  books,
  travel,
};
