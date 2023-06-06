import { Router } from "express";
import {
  createAnnouncementController,
  lisAnnouncementController,
} from "../controllers/announcement.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { announcementRequestSchema } from "../schemas/announcement.schemas";

const announcementRoutes = Router();

announcementRoutes.post(
  "",
  ensureDataIsValidMiddleware(announcementRequestSchema),
  createAnnouncementController
);
announcementRoutes.get("", lisAnnouncementController);

export { announcementRoutes };
