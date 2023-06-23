import { Request, Response } from "express";
import { createUserServices } from "../services/user/createUser.services";
import { TUserRequest, TUserUpdateRequest, TUserResponse } from "../interfaces/user.interfaces";
import { retrieveUserService } from "../services/user/retrieveUser.services";
import { updateUserService } from "../services/user/updateUser.services";
import { deleteUserService } from "../services/user/deleteUserServices";
import { retrieveUserByTokenService } from "../services/user/retrieveUserByToken.service";

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


const retrieveUserByTokenController = async (req: Request, res: Response): Promise<Response> => {

    const userId: string = req.user.id

    const user: TUserResponse = await retrieveUserByTokenService(userId)

    return res.json(user)
}

export {createUserController, retrieveUserController, retrieveUserByTokenController, updateUserController, deleteUserController}

