import { NextFunction, Request, Response } from "express";
import deleteFriendService from "../../services/friends/deleteFriend.service";

const deleteFriendController = async (req: Request, res: Response, next: NextFunction) =>{
  try {
    const userId = req.user
    const followId = req.params.followId

    await deleteFriendService(userId, followId)

    return res.status(204).send()
    
  } catch (error) {
    next(error)
  }
}

export default deleteFriendController