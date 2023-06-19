import { z } from "zod";
import {
  announcementSchema,
  announcementRequestSchema,
} from "./../schemas/announcement.schemas";
import { announcementResponseSchema } from "./../schemas/announcement.schemas";
import { DeepPartial } from "typeorm";

type TAnnouncement = z.infer<typeof announcementSchema>;
type TAnnouncementRequest = z.infer<typeof announcementRequestSchema>;
type TAnnouncementResponse = z.infer<typeof announcementResponseSchema>;
type PartialAnnouncement = DeepPartial<TAnnouncementRequest>
export { TAnnouncement, TAnnouncementRequest, TAnnouncementResponse, PartialAnnouncement };
