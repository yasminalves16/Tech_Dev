
import { Router } from 'express';
import verifyToken from '../middlewares/verifyToken.middleware';

import { NextFunction, Request, Response } from "express";
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entity';
import { FriendControll } from '../entities/controll.entity';
import { Friend } from '../entities/friend.entity';



const friendRoutes = Router();
const addFriendController = async (req: Request, res: Response) => {
    const userId = req.user
    const {friendId} = req.body
    const userRepository = AppDataSource.getRepository(User)
    const controllerRepository = AppDataSource.getRepository(FriendControll)
    const friendRepository = AppDataSource.getRepository(Friend)
    const user = await userRepository.findOne({
        where:{
            id: userId
        }        
    })
    if(!user) return res.status(404).json({message: "not found"})

    const friend = await userRepository.findOne({
        where:{
            id: friendId
        }
    })
    if(!friend) return res.status(404).json({message: "not found"})
    const newFriend = friendRepository.create({
        userId: friend
    })

    await friendRepository.save(newFriend)

    const friendControll = controllerRepository.create({
        userId: user,
        followFriendId: newFriend

    })
    await controllerRepository.save(friendControll)
    user.friends.push(friendControll)
    await userRepository.save(user)
    const updatedUser = await userRepository.findOne({
        where:{
            id: userId
        },
        relations: ["friends"]        
    })
    return res.json({message: "Amigo Adicionado"})

}

friendRoutes.post("",verifyToken, addFriendController)




export default friendRoutes;