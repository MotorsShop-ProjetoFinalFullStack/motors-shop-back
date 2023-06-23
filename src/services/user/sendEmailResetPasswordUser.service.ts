import { randomUUID } from "crypto";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { emailService } from "../../utils/sendEmail.utils";

export const sendResetEmailResetPassword = async (email: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { email: email },
  });
  if (!user) {
    throw new AppError("user not found", 400);
  }
  const resetToken = randomUUID();
  const updateToken = userRepository.update(
    { email: email },
    { resetToken: resetToken }
  );

  const resetPasswordTemplate = emailService.resetPasswordTemplate(
    user.name,
    email,
    resetToken
  );
  await emailService.sendEmail(resetPasswordTemplate);
};
