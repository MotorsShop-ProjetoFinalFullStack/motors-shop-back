import { Repository } from "typeorm"
import { TAllCommentsResponse } from "../../interfaces/comment.interfaces"
import { AppDataSource } from "../../data-source"
import { Announcement } from "../../entities/announcement.entitie"
import { commentMultipleResponseSchema } from "../../schemas/comment.schema"

const listCommentsByAnnouncementService = async (announcementId: string): Promise<TAllCommentsResponse> => {

    const commentsByAnnouncement: Announcement | null = await AppDataSource.createQueryBuilder(Announcement, "announcement").
    innerJoinAndSelect("announcement.comments", "comments").
    innerJoinAndSelect("comments.user", "users").
    where("announcement.id = :announcementId", {announcementId}).
    getOne()

    const comments: TAllCommentsResponse = commentMultipleResponseSchema.parse(commentsByAnnouncement?.comments)

    return comments
}

export {
    listCommentsByAnnouncementService
}