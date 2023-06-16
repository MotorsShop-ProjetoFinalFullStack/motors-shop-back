import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entitie";
import { TAnnouncement } from "../../interfaces/announcement.interfaces";
import { announcementUpdateSchema } from "../../schemas/announcement.schemas";
import { Request } from "express";

export const updateAnnouncementService = async (
  newAnnouncementData: TAnnouncement,
  idAnnouncement: number,
): Promise<any> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const oldAnnouncementData = await announcementRepository.findOneBy({
    id: String(idAnnouncement),
  });

  const announcement = announcementRepository.create({
    ...oldAnnouncementData,
    ...newAnnouncementData,
  });

  await announcementRepository.save(announcement);

  const updatedAnnouncement = announcementUpdateSchema.parse(announcement);

  return updatedAnnouncement;
};
