import { Repository } from "typeorm";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { User } from "../../entities/user.entitie";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/user.schemas";
import { Address } from "../../entities/address.entitie";

const retrieveUserByTokenService = async (
  userId: string
): Promise<TUserResponse> => {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: any = await usersRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      address: true,
    },
  });

  const user: any = userSchemaResponse.parse(findUser);

  return user;
};

export { retrieveUserByTokenService };
