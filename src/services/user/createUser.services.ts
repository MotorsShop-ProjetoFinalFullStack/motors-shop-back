import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { Address } from "../../entities/address.entitie";
import { AppError } from "../../errors/AppError";
import { userSchemaResponse } from "../../schemas/user.schemas";


const createUserServices = async (data: TUserRequest): Promise<TUserResponse> => {

    const {email, cpf} = data
    const userRepository = AppDataSource.getRepository(User)
    const addressRepository = AppDataSource.getRepository(Address)

    const findUser = await userRepository.findOne({
        where: {
            email,
            cpf
        }
    })

    if(findUser){
        throw new AppError("User already exists")
    }    

    const addressData = data.address
    delete data.address

    const hashedPassword = await hash(data.password, 10)

    const user = userRepository.create({
        ...data,
        password:hashedPassword,
    })
    await userRepository.save(user)

    const address = addressRepository.create({
        ...addressData,
        user: user,
    })
    await addressRepository.save(address)

    const newUser = userSchemaResponse.parse(user)
    return newUser  

}

export {createUserServices}