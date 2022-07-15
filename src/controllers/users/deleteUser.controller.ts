import { NextFunction, Request, Response } from "express";

import deleteUserService from "../../services/users/deleteUser.service";

export const deleteUserController = async (req: Request, res: Response,next: NextFunction) => {
  try{
  const id = req.params.id
  await deleteUserService(id)
  return res.status(204).send()
  }catch(error){
    next(error)
  }
}