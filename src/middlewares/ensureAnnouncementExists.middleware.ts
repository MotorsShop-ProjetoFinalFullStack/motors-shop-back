import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Announcement } from "../entities/announcement.entitie";
import { AppError } from "../errors";

export const ensureAnnouncementExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const findAnnouncement = await announcementRepository.findOne({
    where: {
      id: String(req.params.id),
    },
  });

  if (!findAnnouncement) {
    throw new AppError("Announcement not found", 404);
  }

  return next();
};
