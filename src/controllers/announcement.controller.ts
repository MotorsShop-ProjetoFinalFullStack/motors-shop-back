import { Request, Response } from "express";
import {
  TAnnouncement,
  TAnnouncementRequest,
} from "../interfaces/announcement.interfaces";
import { createAnnouncementService } from "../services/announcement/createAnnouncement.services";
import { listAnnouncementService } from "../services/announcement/listAnnouncement.services";
import { deleteAnnouncementService } from "../services/announcement/deleteAnnouncement.services";
import { updateAnnouncementService } from "../services/announcement/updateAnnouncement.services";

const createAnnouncementController = async (req: Request, res: Response) => {
  const data: TAnnouncementRequest = req.body;
  const newAnnouncement = await createAnnouncementService(data);
  return res.status(201).json(newAnnouncement);
};
const lisAnnouncementController = async (req: Request, res: Response) => {
  const users = await listAnnouncementService();
  return res.json(users);
};
const deleteAnnouncementController = async (req: Request, res: Response) => {
  await deleteAnnouncementService(Number(req.params.id));

  return res.status(204).send();
};
const upgradeAnnouncementController = async (req: Request, res: Response) => {
  const AnnouncementData: TAnnouncement = req.body;
  const idAnnouncement = parseInt(req.params.id);

  const updatedAnnouncement = await updateAnnouncementService(
    AnnouncementData,
    idAnnouncement,
  );

  return res.json(updatedAnnouncement);
};
export {
  createAnnouncementController,
  lisAnnouncementController,
  deleteAnnouncementController,
  upgradeAnnouncementController,
};
