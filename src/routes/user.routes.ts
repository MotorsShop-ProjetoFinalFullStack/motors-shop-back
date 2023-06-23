import { Router } from "express";
import { createUserController, deleteUserController, retrieveUserController, updateUserController, retrieveUserByTokenController, sendResetEmailPassword } from "../controllers/user.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdateRequest } from "../schemas/user.schemas";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { ensureUserExistsUpdateMiddleware } from "../middlewares/ensureUserExistsUpdate.middleware";
import { verifyToken } from "../middlewares/verifyToken.middlewares";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureUserExistsMiddleware,
  createUserController
);
userRoutes.get("/:id", retrieveUserController);
userRoutes.patch("/:id", ensureDataIsValidMiddleware(userSchemaUpdateRequest),ensureUserExistsUpdateMiddleware,  updateUserController)
userRoutes.delete("/:id", deleteUserController)
userRoutes.get("/unique/users", verifyToken, retrieveUserByTokenController);
userRoutes.post("/resetPassword", sendResetEmailPassword);
userRoutes.patch("/resetPassword/:token", resetPasswordController);

export { userRoutes };
