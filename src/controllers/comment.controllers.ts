import { Request, Response } from "express"
import { TAllCommentsResponse, TComment, TCommentRequest } from "../interfaces/comment.interfaces"
import { createCommentService } from "../services/comment/createComment.service"
import { listCommentsByAnnouncementService } from "../services/comment/listCommentsByAnnouncement.service"
import { updateCommentService } from "../services/comment/updateComment.service"
import { removeCommentService } from "../services/comment/removeComment.service"

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

const updateCommentController = async (req: Request, res: Response): Promise<Response> => {

    const commentId: string = req.params.id
    const userId: string = req.user.id
    const dataUpdate: TCommentRequest = req.body

    const commentUpdated: TComment = await updateCommentService(dataUpdate, commentId, userId)

    return res.status(201).json(commentUpdated)

}

const removeCommentController = async (req: Request, res: Response): Promise<Response> => {

    const commentId: string = req.params.id
    const userId: string = req.user.id

    await removeCommentService(commentId, userId)

    return res.status(204).send()
}

export {
    createCommentController,
    listCommentsByAnnouncementController,
    updateCommentController,
    removeCommentController
}