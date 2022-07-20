import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUpdateUser } from "../../interfaces/users";
import * as bcrypt from "bcryptjs";

export const updateUserService = async (id: string, user: IUpdateUser) => {

  const userRepository = AppDataSource.getRepository(User);

  const updatedUser = await userRepository.findOneBy({ id });

  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  const newUser = await userRepository.createQueryBuilder().update(User).set(user).where("id = :id", { id }).execute();

  return { message: updatedUser };

};

