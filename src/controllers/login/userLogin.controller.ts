import { NextFunction, Request, Response } from "express";

import userLoginService from "../../services/login/userLogin.service";

const userLoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const token = await userLoginService({ email, password });
    return res.status(200).json({
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

export default userLoginController;
