import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors"

const verifyUserIsAdvertiserMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {

    if(req.user.typeUser === "Comprador"){
        throw new AppError("Insufficient permission", 403)
    }

    return next()

}

export {
    verifyUserIsAdvertiserMiddleware
}