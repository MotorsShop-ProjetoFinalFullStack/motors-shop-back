import { z } from "zod";

const announcementSchema = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.string(),
  km: z.number(),
  color: z.string(),
  fipePrice: z.number(),
  price: z.number(),
  description: z.string(),
  image: z.string(),
});
const announcementRequestSchema = announcementSchema.omit({
  id: true,
});
const announcementResponseSchema = announcementSchema.omit({});
const announcementMultipleResponseSchema = announcementResponseSchema.array();
export {
  announcementSchema,
  announcementRequestSchema,
  announcementResponseSchema,
  announcementMultipleResponseSchema,
};
