import { Request, Response } from "express";
import {
  PartialAnnouncement,
  TAllAnnouncementResponse,
  TAnnouncement,
  TAnnouncementRequest,
  TAnnouncementResponse,
} from "../interfaces/announcement.interfaces";
import { createAnnouncementService } from "../services/announcement/createAnnouncement.services";
import { listAnnouncementService } from "../services/announcement/listAnnouncement.services";
import { deleteAnnouncementService } from "../services/announcement/deleteAnnouncement.services";
import { updateAnnouncementService } from "../services/announcement/updateAnnouncement.services";
import { listAnnouncementByTokenService } from "../services/announcement/listAnnouncementsByToken.service";
import { getAnnouncementByIdService } from "../services/announcement/getAnnouncementById.service";

const createAnnouncementController = async (req: Request, res: Response) => {
  const data: TAnnouncementRequest = req.body;
  const userId: string = req.user.id;

  const newAnnouncement = await createAnnouncementService(data, userId);
  return res.status(201).json(newAnnouncement);
};

const getAnnouncementById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const announcementId: string = req.params.id;

  const announcement: TAnnouncementResponse = await getAnnouncementByIdService(
    announcementId
  );

  return res.json(announcement);
};

const listAnnouncementController = async (req: Request, res: Response) => {
  const announcements: TAllAnnouncementResponse =
    await listAnnouncementService();

  return res.json(announcements);
};

const listAnnouncementsByTokenController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.user.id;

  const announcementsByToken: TAllAnnouncementResponse =
    await listAnnouncementByTokenService(userId);

  return res.json(announcementsByToken);
};

const deleteAnnouncementController = async (req: Request, res: Response) => {
  const idAnnouncement = req.params.id;
  await deleteAnnouncementService(idAnnouncement);

  return res.status(204).send();
};

const upgradeAnnouncementController = async (req: Request, res: Response) => {
  const AnnouncementData: PartialAnnouncement = req.body;
  const idAnnouncement = req.params.id;

  const updatedAnnouncement = await updateAnnouncementService(
    AnnouncementData,
    idAnnouncement
  );

  return res.json(updatedAnnouncement);
};

export {
  createAnnouncementController,
  getAnnouncementById,
  listAnnouncementController,
  listAnnouncementsByTokenController,
  deleteAnnouncementController,
  upgradeAnnouncementController,
};
