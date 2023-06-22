import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"


const deleteUserService = async (userId: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id: userId})

    await userRepository.remove(user!)
}

export {deleteUserService}