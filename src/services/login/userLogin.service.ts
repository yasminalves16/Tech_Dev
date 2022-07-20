import { AppDataSource } from "../../data-source";
import { IUserLogin } from "../../interfaces/users";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userLoginService = async ({ email, password }: IUserLogin) => {

  if ( !email || !password) {
    throw new AppError("Missing field");
  }

  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const userAccount = users.find((user) => user.email === email);

  if (!userAccount) {
    throw new AppError("User not found", 404);
  }

  if (!userAccount.active) {
    throw new AppError("User is not active", 400);
  }

  const matchPassword = await bcrypt.compare(password, userAccount.password);

  if (!matchPassword) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = jwt.sign(
    { id: userAccount.id, email: email },
      "SECRET_KEY",
    {
      expiresIn: "24h",
    }
  );

  return token;
};

export default userLoginService;
