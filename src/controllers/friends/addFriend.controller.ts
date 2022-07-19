import { NextFunction, Request, Response } from "express";
import addFriendService from "../../services/friends/addFriend.service";
import { instanceToPlain } from "class-transformer";

const addFriendController = async (req: Request, res: Response, next: NextFunction) => {
    try{
    const userId = req.user
    const {friendId} = req.body
    const friend = await addFriendService(userId, friendId)
    return res.status(200).json(instanceToPlain(friend))
} catch(error){
    next(error)
}
    

}

export default addFriendController
