import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer"
import { updateUserService } from "../../services/users/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
    
    const id = req.params.id;
    const newUser = req.body;

    const updatedUser = await updateUserService(id, newUser);

    return res.status(200).json(instanceToPlain(updatedUser));
  
};
