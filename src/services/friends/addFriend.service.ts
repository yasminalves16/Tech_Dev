

import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { FollowControll } from '../../entities/controll.entity';
// import { Friend } from '../../entities/friend.entity';
import { AppError } from '../../errors/AppError';




const addFriendService = async (userId:string, friendId:string): Promise<any> => {
    
    const userRepository = AppDataSource.getRepository(User)
    const controllerRepository = AppDataSource.getRepository(FollowControll)

    const user = await userRepository.findOne({
            where:{
                id: userId
            }        
        })
        if(!user) throw new AppError("not found", 404)
        const follow = await userRepository.findOne({
            where:{
                id: friendId
            }        
        })
        if(!follow) throw new AppError("not found", 404)
        const followControll = controllerRepository.create({
                user,
                follow               
        
        })
            await controllerRepository.save(followControll)
                
                return followControll


    // const userRepository = AppDataSource.getRepository(User)
    // const controllerRepository = AppDataSource.getRepository(FriendControll)
    // const friendRepository = AppDataSource.getRepository(Friend)
    // const user = await userRepository.findOne({
    //     where:{
    //         id: userId
    //     }        
    // })
    // if(!user) throw new AppError("not found", 404)

    // const friend = await userRepository.findOne({
    //     where:{
    //         id: friendId
    //     }
    // })
    // if(!friend) throw new AppError("not found", 404)
    // const newFriend = friendRepository.create({
    //     userId: friend
    // })
    // const userToFriend = friendRepository.create({
    //     userId: user
    // })
    // await friendRepository.save(userToFriend)
    // await friendRepository.save(newFriend)

    // const friendControll = controllerRepository.create({
    //     userId: user,
    //     followFriendId: newFriend

    // })
    // await controllerRepository.save(friendControll)

    // const userToFriendControll = controllerRepository.create({
    //     userId: friend,
    //     followFriendId: userToFriend
    // })
    // await controllerRepository.save(userToFriendControll)
    // // user.friends.push(friendControll)
    // // await userRepository.save(user)
    // const updatedUser = await userRepository.findOne({
    //     where:{
    //         id: userId
    //     },
    //     relations: {
    //         friends: true
    //     }            
    // })
    
    // return updatedUser

}





export default addFriendService;