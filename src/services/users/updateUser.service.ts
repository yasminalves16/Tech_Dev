import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUpdateUser, IUser } from "../../interfaces/users";
import * as bcrypt from "bcryptjs";

export const updateUserService = async (id: string, user: IUpdateUser) => {
 
    const userRepository = AppDataSource.getRepository(User);

  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  const newUser = await userRepository
    .createQueryBuilder()
    .update(User)
    .set(user)
    .where("id = :id", { id })
    .execute();

  const updatedUser = await userRepository.findOneBy({
    id,
  });
  return { message: updatedUser };
};

