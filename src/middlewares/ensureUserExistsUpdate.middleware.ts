import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";



const ensureUserExistsUpdateMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const userRepository = AppDataSource.getRepository(User)
    const data = req.body
    const userId = req.params.id
    const findUserMail = await userRepository.findOneBy({
        email: data.email
    })
    const findUserCpf = await userRepository.findOneBy({        
        cpf: data.cpf
    })

    const userData = await userRepository.findOne({
        where: {
            id: userId,
        }
    })
    

    if(data.email && data.email !== userData?.email && findUserMail){
        return res.status(409).json({
            message: "Email already exists"
        })
    }

    if(data.cpf && data.cpf!== userData?.cpf && findUserCpf){
        return res.status(409).json({
            message: "Cpf already exists"
        })
    }

    

    next()

}

export {ensureUserExistsUpdateMiddleware}