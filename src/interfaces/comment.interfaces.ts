import { z } from "zod"
import { commentMultipleResponseSchema, commentRequestSchema, commentSchema } from "../schemas/comment.schema"

type TComment = z.infer<typeof commentSchema>
type TCommentRequest = z.infer<typeof commentRequestSchema>
type TAllCommentsResponse = z.infer<typeof commentMultipleResponseSchema>

export {
    TComment,
    TCommentRequest,
    TAllCommentsResponse
}