import { Router } from "express"
import { verifyToken } from "../middlewares/verifyToken.middlewares"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware"
import { commentRequestSchema } from "../schemas/comment.schema"
import { ensureAnnouncementExistsMiddleware } from "../middlewares/ensureAnnouncementExists.middleware"
import { createCommentController, listCommentsByAnnouncementController } from "../controllers/comment.controllers"

const commentRoutes = Router()

commentRoutes.post(
    "/announcements/:id",
    verifyToken,
    ensureDataIsValidMiddleware(commentRequestSchema),
    ensureAnnouncementExistsMiddleware,
    createCommentController
)

commentRoutes.get(
    "/announcements/:id",
    ensureAnnouncementExistsMiddleware,
    listCommentsByAnnouncementController
)

export {
    commentRoutes
}