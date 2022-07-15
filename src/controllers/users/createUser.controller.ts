
import { Request, Response } from "express";
import { createUserService } from './../../services/users/createUser.service';
import { instanceToPlain } from "class-transformer"


export const createUserController = async (req: Request, res: Response) => {
  
    const { name, email , password, birthdate} = req.body;
  
    const newUser = await createUserService({ name, email , password, birthdate});
  
    return res.status(201).json(instanceToPlain(newUser))

};
