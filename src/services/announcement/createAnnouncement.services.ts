import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entitie";
import {
  TAnnouncementRequest,
  TAnnouncementResponse,
} from "../../interfaces/announcement.interfaces";
import { announcementResponseSchema } from "../../schemas/announcement.schemas";

const createAnnouncementService = async (
  data: TAnnouncementRequest
): Promise<TAnnouncementResponse> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcement = announcementRepository.create({
    ...data,
  });
  await announcementRepository.save(announcement);
  return announcementResponseSchema.parse(announcement);
};
export { createAnnouncementService };
