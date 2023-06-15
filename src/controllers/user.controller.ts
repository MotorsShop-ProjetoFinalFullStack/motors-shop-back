import { Request, Response } from "express";
import { createUserServices } from "../services/user/createUser.services";
import { TUserRequest } from "../interfaces/user.interfaces";
import { retrieveUserService } from "../services/user/retrieveUser.services";

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

export {createUserController, retrieveUserController}