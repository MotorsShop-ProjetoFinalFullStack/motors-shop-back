import { z } from "zod";
import { userRetrieveSchemaResponse, userSchema, userSchemaRequest, userSchemaResponse } from "../schemas/user.schemas";
import { DeepPartial } from "typeorm";


type TUser = z.infer<typeof userSchema>
type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchemaResponse>
type TUserRetrieveResponse = z.infer<typeof userRetrieveSchemaResponse>
type TUserUpdateRequest = DeepPartial<TUserRequest>

export {TUserRequest, TUser, TUserResponse, TUserUpdateRequest, TUserRetrieveResponse}