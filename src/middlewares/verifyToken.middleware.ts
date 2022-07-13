import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  
  let token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Missing authorization headers" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Missing authorization headers" });
  }

    next();
  });
};

export default verifyAuthTokenMiddleware;
