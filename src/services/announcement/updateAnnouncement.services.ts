import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entitie";
import {
  PartialAnnouncement,
  TAnnouncement,
} from "../../interfaces/announcement.interfaces";
import { announcementUpdateSchema } from "../../schemas/announcement.schemas";
import { Request } from "express";

export const updateAnnouncementService = async (
  newAnnouncementData: PartialAnnouncement,
  idAnnouncement: string
): Promise<any> => {
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const oldAnnouncementData = await announcementRepository.findOneBy({
    id: idAnnouncement,
  });

  const announcement = announcementRepository.create({
    ...oldAnnouncementData,
    ...newAnnouncementData,
  });

  await announcementRepository.save(announcement);

  const updatedAnnouncement = announcementUpdateSchema.parse(announcement);

  return updatedAnnouncement;
};
