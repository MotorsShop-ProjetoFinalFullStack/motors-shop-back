import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entitie";
import { TAnnouncementResponse } from "../../interfaces/announcement.interfaces";
import { announcementMultipleResponseSchema } from "../../schemas/announcement.schemas";

const listAnnouncementService = async (): Promise<TAnnouncementResponse[]> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const findAnnouncement = await announcementRepository.find();
  const announcement =
    announcementMultipleResponseSchema.parse(findAnnouncement);
  return announcement;
};
export { listAnnouncementService };
