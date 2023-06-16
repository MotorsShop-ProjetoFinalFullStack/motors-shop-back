import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  lisAnnouncementController,
  upgradeAnnouncementController,
} from "../controllers/announcement.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  announcementRequestSchema,
  announcementUpdateSchema,
} from "../schemas/announcement.schemas";
import { ensureAnnouncementExistsMiddleware } from "../middlewares/ensureAnnouncementExists.middleware";
import { verifyToken } from "../middlewares/verifyToken.middlewares";

const announcementRoutes = Router();

announcementRoutes.post(
  "",
  ensureDataIsValidMiddleware(announcementRequestSchema),
  createAnnouncementController
);
announcementRoutes.get("", lisAnnouncementController);
announcementRoutes.delete(
  "/:id",
  ensureAnnouncementExistsMiddleware,
  deleteAnnouncementController
);

announcementRoutes.patch(
  "/:id",
  ensureAnnouncementExistsMiddleware,
  ensureDataIsValidMiddleware(announcementUpdateSchema),
  upgradeAnnouncementController
);

export { announcementRoutes };
