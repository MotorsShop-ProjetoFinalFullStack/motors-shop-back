import { Request, Response } from "express";
import { createUserServices } from "../services/user/createUser.services";
import { TUserRequest, TUserUpdateRequest } from "../interfaces/user.interfaces";
import { retrieveUserService } from "../services/user/retrieveUser.services";
import { updateUserService } from "../services/user/updateUser.services";
import { deleteUserService } from "../services/user/deleteUserServices";

const createUserController = async (req: Request, res:Response) => {

    const userData: TUserRequest = req.body

    const newUser = await createUserServices(userData)

    return res.status(201).json(newUser)
    
}

const retrieveUserController = async (req: Request, res: Response) => {

    const userId: string = req.params.id

    const user = await retrieveUserService(userId)

    return res.json(user)
}

const updateUserController = async (req: Request, res: Response) => {

    const userData = req.body

    const userId: string = req.params.id

    const newUser = updateUserService(userData, userId)

    return res.json(newUser)
}

const deleteUserController = async (req: Request, res: Response) => {

    const userId = req.params.id

    await deleteUserService(userId)

    return res.status(204).json()
    
}

export {createUserController, retrieveUserController, updateUserController, deleteUserController}