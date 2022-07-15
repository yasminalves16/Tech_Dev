import { NextFunction, Request, Response } from "express";
import listUserService from "../../services/users/listUser.service";
import { instanceToPlain } from "class-transformer"

export const listUserController = async (req: Request, res: Response, next: NextFunction) => {
  try{
  const id = req.params.id
  const listUser = await listUserService(id)

  return res.status(200).json(instanceToPlain(listUser))
  } catch(error){
    next(error)
  }
}