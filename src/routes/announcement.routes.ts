import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  getAnnouncementById,
  listAnnouncementController,
  listAnnouncementsByTokenController,
  upgradeAnnouncementController,
} from "../controllers/announcement.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  announcementRequestSchema,
  announcementUpdateSchema,
} from "../schemas/announcement.schemas";
import { ensureAnnouncementExistsMiddleware } from "../middlewares/ensureAnnouncementExists.middleware";
import { verifyToken } from "../middlewares/verifyToken.middlewares";
import { verifyUserIsAdvertiserMiddleware } from "../middlewares/verifyUserIsAdvertiser.middleware";

const announcementRoutes = Router();

announcementRoutes.post(
  "",
  verifyToken,
  verifyUserIsAdvertiserMiddleware,
  ensureDataIsValidMiddleware(announcementRequestSchema),
  createAnnouncementController
);

announcementRoutes.get("", listAnnouncementController);

announcementRoutes.get("/:id", ensureAnnouncementExistsMiddleware, getAnnouncementById)

announcementRoutes.get("/users", verifyToken, verifyUserIsAdvertiserMiddleware, listAnnouncementsByTokenController)

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
