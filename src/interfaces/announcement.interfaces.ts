import { z } from "zod";
import {
  announcementSchema,
  announcementRequestSchema,
} from "./../schemas/announcement.schemas";
import { announcementResponseSchema } from "./../schemas/announcement.schemas";

type TAnnouncement = z.infer<typeof announcementSchema>;
type TAnnouncementRequest = z.infer<typeof announcementRequestSchema>;
type TAnnouncementResponse = z.infer<typeof announcementResponseSchema>;
export { TAnnouncement, TAnnouncementRequest, TAnnouncementResponse };
