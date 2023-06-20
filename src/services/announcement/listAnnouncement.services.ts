import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entitie";
import { TAllAnnouncementResponse } from "../../interfaces/announcement.interfaces";
import { announcementMultipleResponseSchema } from "../../schemas/announcement.schemas";

const listAnnouncementService = async (): Promise<TAllAnnouncementResponse> => {
  
  const announcementRepository: Repository<Announcement> = AppDataSource.getRepository(Announcement);

  const findAnnouncement: Announcement[] = await announcementRepository.find({
    relations: {
      user: true
    }
  });
  
  const announcements: TAllAnnouncementResponse = announcementMultipleResponseSchema.parse(findAnnouncement);

  return announcements;
};
export { listAnnouncementService };
