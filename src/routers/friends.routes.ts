
import { Router } from 'express';
import verifyToken from '../middlewares/verifyToken.middleware';

import addFriendController from '../controllers/friends/addFriend.controller';



const friendRoutes = Router();



friendRoutes.post("",verifyToken, addFriendController)
// friendRoutes.delete("/:id",verifyToken, addFriendController)




export default friendRoutes;