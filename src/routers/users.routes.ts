import { updateUserController } from './../controllers/users/updateUser.controller';
import { createUserController } from '../controllers/users/createUser.controller';
import { Router } from 'express';
import { listUserController } from '../controllers/users/listUser.controller';
import { deleteUserController } from '../controllers/users/deleteUser.controller';


const userRoutes = Router();

userRoutes.post("", createUserController)
userRoutes.get("/:id", listUserController)
userRoutes.delete("/:id", deleteUserController)
userRoutes.patch("/:id", updateUserController )

export default userRoutes;