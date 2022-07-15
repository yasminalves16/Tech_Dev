import { Request, Response, NextFunction } from "express";
import { createUserService } from "./../../services/users/createUser.service";

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {

  const { name, email, password, birthdate } = req.body;

  const newUser = await createUserService({ name, email, password, birthdate });

  return res.status(201).json(newUser);
};
