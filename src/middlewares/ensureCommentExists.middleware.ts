import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Comment } from "../entities/comment.entity"
import { AppError } from "../errors"

const ensureCommentExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const commentsRepository: Repository<Comment> = AppDataSource.getRepository(Comment)

    const findComment: Comment | null = await commentsRepository.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!findComment){
        throw new AppError("Comment not found!", 404)
    }

    return next()

}

export {
    ensureCommentExistsMiddleware
}