import { AppDataSource } from "../../data-source";
import { IUserLogin } from "../../interfaces/users";
import { AppError } from "../../errors/AppError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const userAccount = users.find((user) => user.email === email);

  if (!userAccount) {
    throw new AppError("User not found", 404);
  }

  const matchPassword = await bcrypt.compare(password, userAccount.password);

  if (!matchPassword) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = jwt.sign(
    { id: userAccount.id, email: email },
    String(process.env.JWT_SECRET),
    {
      expiresIn: "24h",
    }
  );

  return token;
};

export default userLoginService;
