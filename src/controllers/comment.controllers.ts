import { Request, Response } from "express"
import { TAllCommentsResponse, TComment, TCommentRequest } from "../interfaces/comment.interfaces"
import { createCommentService } from "../services/comment/createComment.service"
import { listCommentsByAnnouncementService } from "../services/comment/listCommentsByAnnouncement.service"

const createCommentController = async (req: Request, res: Response): Promise<Response> => {
    const userId: string = req.user.id
    const announcementId: string = req.params.id
    const data: TCommentRequest = req.body

    const comment: TComment = await createCommentService(data, userId, announcementId)

    return res.status(201).json(comment)
}

const listCommentsByAnnouncementController = async (req: Request, res: Response): Promise<Response> => {

    const announcementId: string = req.params.id

    const commentsByAnnouncement: TAllCommentsResponse = await listCommentsByAnnouncementService(announcementId)

    return res.json(commentsByAnnouncement)
}

export {
    createCommentController,
    listCommentsByAnnouncementController
}