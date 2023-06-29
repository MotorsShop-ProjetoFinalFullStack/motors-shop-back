import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { TUserRetrieveResponse } from "../../interfaces/user.interfaces";
import { userRetrieveSchemaResponse } from "../../schemas/user.schemas";

const retrieveUserService = async (
  userId: string
): Promise<TUserRetrieveResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      address: true,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const retrieveUser = userRetrieveSchemaResponse.parse(user);

  return retrieveUser;
};

export { retrieveUserService };
