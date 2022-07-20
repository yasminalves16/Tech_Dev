import { Router } from 'express';
import verifyToken from '../middlewares/verifyToken.middleware';
import addFriendController from '../controllers/friends/addFriend.controller';
import deleteFriendController from '../controllers/friends/deleteFriend.controller';

const friendRoutes = Router();

friendRoutes.post("",verifyToken, addFriendController)
friendRoutes.delete("/:followId",verifyToken, deleteFriendController)

export default friendRoutes;