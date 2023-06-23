import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { Address } from "../../entities/address.entitie";
import { userSchemaResponse } from "../../schemas/user.schemas";


const createUserServices = async (data: TUserRequest): Promise<TUserResponse> => {

    
    const userRepository = AppDataSource.getRepository(User)
    const addressRepository = AppDataSource.getRepository(Address)

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