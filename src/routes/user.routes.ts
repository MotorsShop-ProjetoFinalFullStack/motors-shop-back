import { Router } from "express";
import { createUserController, retrieveUserController } from "../controllers/user.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/user.schemas";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";


const userRoutes = Router()

userRoutes.post("",ensureDataIsValidMiddleware(userSchemaRequest), ensureUserExistsMiddleware, createUserController)
userRoutes.get("/:id", retrieveUserController)

export {userRoutes}