import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";
import { User } from "../entities/user.entity";

const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.userId;

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  next();
};

export default verifyUserExists;
