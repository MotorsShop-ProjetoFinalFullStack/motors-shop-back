import { Request, Response } from "express";
import {
  PartialAnnouncement,
  TAllAnnouncementResponse,
  TAnnouncement,
  TAnnouncementRequest,
} from "../interfaces/announcement.interfaces";
import { createAnnouncementService } from "../services/announcement/createAnnouncement.services";
import { listAnnouncementService } from "../services/announcement/listAnnouncement.services";
import { deleteAnnouncementService } from "../services/announcement/deleteAnnouncement.services";
import { updateAnnouncementService } from "../services/announcement/updateAnnouncement.services";
import { listAnnouncementByTokenService } from "../services/announcement/listAnnouncementsByToken.service";

const createAnnouncementController = async (req: Request, res: Response) => {
  const data: TAnnouncementRequest = req.body;
  const userId: string = req.user.id

  const newAnnouncement = await createAnnouncementService(data, userId);
  return res.status(201).json(newAnnouncement);
};

const listAnnouncementController = async (req: Request, res: Response) => {
  const announcements: TAllAnnouncementResponse = await listAnnouncementService();

  return res.json(announcements);
};

const listAnnouncementsByTokenController = async (req: Request, res: Response): Promise<Response> => {

  const userId: string = req.user.id

  const announcementsByToken: TAllAnnouncementResponse = await listAnnouncementByTokenService(userId)
  
  return res.json(announcementsByToken)
}

const deleteAnnouncementController = async (req: Request, res: Response) => {
  await deleteAnnouncementService(Number(req.params.id));

  return res.status(204).send();
};

const upgradeAnnouncementController = async (req: Request, res: Response) => {
  const AnnouncementData: PartialAnnouncement = req.body;
  const idAnnouncement = req.params.id;

  const updatedAnnouncement = await updateAnnouncementService(
    AnnouncementData,
    idAnnouncement,
  );

  return res.json(updatedAnnouncement);
};

export {
  createAnnouncementController,
  listAnnouncementController,
  listAnnouncementsByTokenController,
  deleteAnnouncementController,
  upgradeAnnouncementController,
};
