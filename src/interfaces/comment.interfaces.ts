import { z } from "zod"
import { commentMultipleResponseSchema, commentRequestSchema, commentSchema } from "../schemas/comment.schema"
import { DeepPartial } from "typeorm"

type TComment = z.infer<typeof commentSchema>
type TCommentRequest = z.infer<typeof commentRequestSchema>
type TAllCommentsResponse = z.infer<typeof commentMultipleResponseSchema>
type TCommentUpdateRequest = DeepPartial<TCommentRequest>

export {
    TComment,
    TCommentRequest,
    TAllCommentsResponse,
    TCommentUpdateRequest 
}