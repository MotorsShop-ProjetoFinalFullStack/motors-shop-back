import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entitie";
import { User } from "../../entities/user.entitie";
import { TUserUpdateRequest } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";


const updateUserService = async (data: TUserUpdateRequest, userId: string) => {

    const userRepository = AppDataSource.getRepository(User) 
    const addressRepository = AppDataSource.getRepository(Address)    
    

    const oldData = await userRepository.findOne({
        where: {
            id: userId,
        },
        relations: {
            address: true,
        },
    })

    

    const newAddressData = data.address
    delete data.address

    const oldAddressData = oldData?.address
    delete oldData?.address

    if(data.password){
        const hashedPassword = await hash(data.password, 10)

        const newUserData = userRepository.create({
            ...oldData,
            ...data,
            password: hashedPassword            
        })
        await userRepository.save(newUserData)
    
        const address = addressRepository.create({
            ...oldAddressData,
            ...newAddressData,
            user: newUserData,
        })
        await addressRepository.save(address)
    
        const newUser = userSchemaResponse.parse(newUserData)
    
        return newUser  
    }

    const newUserData = userRepository.create({
        ...oldData,
        ...data,
        
    })
    await userRepository.save(newUserData)

    const address = addressRepository.create({
        ...oldAddressData,
        ...newAddressData,
        user: newUserData,
    })
    await addressRepository.save(address)

    const newUser = userSchemaResponse.parse(newUserData)

    return newUser    
}

export {updateUserService}