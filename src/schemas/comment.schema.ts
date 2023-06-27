import { z } from "zod"
import { userSchemaResponse } from "./user.schemas"
import { announcementResponseForComment } from "./announcement.schemas"

const commentSchema = z.object({
    id: z.string(),
    content: z.string(),
    createdAt: z.string(),
    user: userSchemaResponse,
    announcement: announcementResponseForComment
})

const commentRequestSchema = commentSchema.omit({
    id: true,
    createdAt: true,
    user: true,
    announcement: true
})

const commentMultipleResponseSchema = commentSchema.omit({
    announcement: true
}).array()

export {
    commentSchema,
    commentRequestSchema,
    commentMultipleResponseSchema
}