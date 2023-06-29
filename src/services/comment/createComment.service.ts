import { Repository } from "typeorm"
import { TComment, TCommentRequest } from "../../interfaces/comment.interfaces"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"
import { Announcement } from "../../entities/announcement.entitie"
import { commentSchema } from "../../schemas/comment.schema"
import { Comment } from "../../entities/comment.entity"

const createCommentService = async (
    data: TCommentRequest, 
    userId: string, 
    announcementId: string
): Promise<TComment> => {

    const commentsRepository: Repository<Comment> = AppDataSource.getRepository(Comment)
    const usersRepository: Repository<User> = AppDataSource.getRepository(User)
    const announcementsRepository: Repository<Announcement> = AppDataSource.getRepository(Announcement)

    const user: User | null = await usersRepository.findOne({
        where: {
            id: userId
        }
    })

    const announcement: Announcement | null = await announcementsRepository.findOne({
        where: {
            id: announcementId
        }
    })

    const comment = {
        content: data.content,
        user: user!,
        announcement: announcement!
    }
    
    const newComment = commentsRepository.create(comment)

    await commentsRepository.save(newComment)

    return commentSchema.parse(newComment)

}

export {
    createCommentService
}