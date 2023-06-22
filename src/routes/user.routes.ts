import { Router } from "express";
import { createUserController, deleteUserController, retrieveUserController, updateUserController } from "../controllers/user.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdateRequest } from "../schemas/user.schemas";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { ensureUserExistsUpdateMiddleware } from "../middlewares/ensureUserExistsUpdate.middleware";


const userRoutes = Router()

userRoutes.post("",ensureDataIsValidMiddleware(userSchemaRequest), ensureUserExistsMiddleware, createUserController)
userRoutes.get("/:id", retrieveUserController)
userRoutes.patch("/:id", ensureDataIsValidMiddleware(userSchemaUpdateRequest),ensureUserExistsUpdateMiddleware,  updateUserController)
userRoutes.delete("/:id", deleteUserController)

export {userRoutes}