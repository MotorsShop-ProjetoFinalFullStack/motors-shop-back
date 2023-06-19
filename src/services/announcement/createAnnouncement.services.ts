import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entitie";
import {
  TAnnouncementRequest,
  TAnnouncementResponse,
} from "../../interfaces/announcement.interfaces";
import { announcementResponseSchema } from "../../schemas/announcement.schemas";
import { User } from "../../entities/user.entitie";

const createAnnouncementService = async (
  data: TAnnouncementRequest,
  userId: string
): Promise<TAnnouncementResponse> => {
  const announcementRepository: Repository<Announcement> = AppDataSource.getRepository(Announcement);
  const usersRepository: Repository<User> = AppDataSource.getRepository(User)

  const user: User | null = await usersRepository.findOne({
    where: {
      id: userId
    }
  })

  const announcement = announcementRepository.create({
    ...data,
    user: user!
  });
  await announcementRepository.save(announcement);
  return announcementResponseSchema.parse(announcement);
};
export { createAnnouncementService };
