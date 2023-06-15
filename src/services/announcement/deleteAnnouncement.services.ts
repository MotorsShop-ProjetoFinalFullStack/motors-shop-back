import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entitie";

export const deleteAnnouncementService = async (
  idAnnouncement: number
): Promise<void> => {
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepository.findOne({
    where: {
      id: String(idAnnouncement),
    },
  });

  await announcementRepository.remove(announcement!);
};
