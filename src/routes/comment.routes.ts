import { Router } from "express"
import { verifyToken } from "../middlewares/verifyToken.middlewares"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware"
import { commentRequestSchema } from "../schemas/comment.schema"
import { ensureAnnouncementExistsMiddleware } from "../middlewares/ensureAnnouncementExists.middleware"
import { createCommentController, listCommentsByAnnouncementController, removeCommentController, updateCommentController } from "../controllers/comment.controllers"
import { ensureCommentExistsMiddleware } from "../middlewares/ensureCommentExists.middleware"

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

commentRoutes.patch(
    "/update/:id",
    verifyToken,
    ensureDataIsValidMiddleware(commentRequestSchema),
    ensureCommentExistsMiddleware,
    updateCommentController
)

commentRoutes.delete(
    "/delete/:id",
    verifyToken,
    ensureCommentExistsMiddleware,
    removeCommentController
)

export {
    commentRoutes
}