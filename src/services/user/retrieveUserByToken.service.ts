import { Repository } from "typeorm"
import { TUserResponse } from "../../interfaces/user.interfaces"
import { User } from "../../entities/user.entitie"
import { AppDataSource } from "../../data-source"
import { userSchemaResponse } from "../../schemas/user.schemas"

const retrieveUserByTokenService = async (userId: string): Promise<TUserResponse> => {

    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser: User | null = await usersRepository.findOne({
        where: {
            id: userId
        }
    })

    const user: TUserResponse = userSchemaResponse.parse(findUser)

    return user

}

export {
    retrieveUserByTokenService
}