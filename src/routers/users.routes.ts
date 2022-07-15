import { createUserController } from '../controllers/users/createUser.controller';
import { Router } from 'express';
import { listUserController } from '../controllers/users/listUser.controller';
import { deleteUserController } from '../controllers/users/deleteUser.controller';

const userRoutes = Router();

userRoutes.post("", createUserController)
userRoutes.get("/:id", listUserController)
userRoutes.delete("/:id", deleteUserController)

export default userRoutes;