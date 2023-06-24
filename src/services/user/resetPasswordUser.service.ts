import { hashSync } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";

export const resetPassword = async (password: string, resetToken: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = userRepository.findOne({
    where: {
      resetToken: resetToken,
    },
  });
  if (!user) {
    throw new AppError("user not found", 404);
  }
  await userRepository.update(
    { resetToken: resetToken },
    { password: hashSync(password, 10), resetToken: null }
  );
};
