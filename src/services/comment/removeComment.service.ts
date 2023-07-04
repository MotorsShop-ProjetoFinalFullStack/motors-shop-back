import { Repository } from "typeorm"
import { Comment } from "../../entities/comment.entity"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"

const removeCommentService = async (commentId: string, userId: string): Promise<void> => {

    const commentsRepository: Repository<Comment> = AppDataSource.getRepository(Comment)

    const findComment: Comment | null = await commentsRepository.findOne({
        where: {
            id: commentId
        },
        relations: {
            user: true
        }
    })

    if(findComment?.user.id !== userId){
        throw new AppError("Comment is not from this user", 409)
    }

    await commentsRepository.remove(findComment)

}

export {
    removeCommentService
}