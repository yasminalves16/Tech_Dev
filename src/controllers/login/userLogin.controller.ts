import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import userLoginService from "../../services/login/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await userLoginService({ email, password });

    return res.status(200).json(token);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        error: error.message,
      });
    }
  }
};

export default userLoginController;
