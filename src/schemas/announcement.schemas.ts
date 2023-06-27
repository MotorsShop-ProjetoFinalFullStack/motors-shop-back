import { z } from "zod";
import { userSchemaResponse } from "./user.schemas";

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
  user: userSchemaResponse
});
const announcementRequestSchema = announcementSchema.omit({
  id: true,
  user: true
});
const announcementResponseSchema = announcementSchema.omit({});
const announcementMultipleResponseSchema = announcementResponseSchema.array();
const announcementResponseForComment = announcementResponseSchema.omit({
  user: true
})

const announcementUpdateSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.string().optional(),
  fuel: z.string().optional(),
  km: z.number().optional(),
  color: z.string().optional(),
  fipePrice: z.number().optional(),
  price: z.number().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
});
export {
  announcementSchema,
  announcementRequestSchema,
  announcementResponseSchema,
  announcementMultipleResponseSchema,
  announcementUpdateSchema,
  announcementResponseForComment
};
