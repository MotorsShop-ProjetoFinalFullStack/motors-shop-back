import { Repository } from "typeorm"
import { TComment, TCommentUpdateRequest } from "../../interfaces/comment.interfaces"
import { Comment } from "../../entities/comment.entity"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"
import { commentSchema } from "../../schemas/comment.schema"

const updateCommentService = async (dataUpdate: TCommentUpdateRequest, commentId: string, userId: string): Promise<TComment> => {

    const commentRepository: Repository<Comment> = AppDataSource.getRepository(Comment)

    const oldComment: Comment | null = await commentRepository.findOne({
        where: {
            id: commentId
        },
        relations: {
            user: true,
            announcement: true
        }
    })

    if(oldComment?.user.id !== userId){
        throw new AppError("Comment is not from this user", 409)
    }

    const newComment = commentRepository.create({
        ...oldComment,
        ...dataUpdate
    }) 

    await commentRepository.save(newComment)

    return commentSchema.parse(newComment)

}

export {
    updateCommentService
}