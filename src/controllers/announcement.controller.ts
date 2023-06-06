import { Request, Response } from "express";
import { TAnnouncementRequest } from "../interfaces/announcement.interfaces";
import { createAnnouncementService } from "../services/announcement/createAnnouncement.services";
import { listAnnouncementService } from "../services/announcement/listAnnouncement.services";

const createAnnouncementController = async (req: Request, res: Response) => {
  const data: TAnnouncementRequest = req.body;
  const newAnnouncement = await createAnnouncementService(data);
  return res.status(201).json(newAnnouncement);
};
const lisAnnouncementController = async (req: Request, res: Response) => {
  const users = await listAnnouncementService();
  return res.json(users);
};
export { createAnnouncementController, lisAnnouncementController };
