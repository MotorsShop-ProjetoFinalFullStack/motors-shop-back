import { Router } from "express";
import { createUserController, retrieveUserByTokenController, retrieveUserController } from "../controllers/user.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/user.schemas";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { verifyToken } from "../middlewares/verifyToken.middlewares";


const userRoutes = Router()

userRoutes.post("",ensureDataIsValidMiddleware(userSchemaRequest), ensureUserExistsMiddleware, createUserController)
userRoutes.get("/:id", retrieveUserController)
userRoutes.get("/unique/users", verifyToken, retrieveUserByTokenController)

export {userRoutes}