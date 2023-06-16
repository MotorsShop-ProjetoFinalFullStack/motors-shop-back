import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";



const ensureUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const userRepository = AppDataSource.getRepository(User)
    const data = req.body
    const findUserMail = await userRepository.findOneBy({
        email: data.email
    })
    const findUserCpf = await userRepository.findOneBy({        
        cpf: data.cpf
    })

    if(findUserMail || findUserCpf){
        return res.status(409).json({
            message: "User already exists"
        })
    }

    next()

}

export {ensureUserExistsMiddleware}