import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { FollowControll } from '../../entities/controll.entity';
import { AppError } from '../../errors/AppError';

const addFriendService = async (userId:string, followId:string): Promise<any> => {
    const userRepository = AppDataSource.getRepository(User)
    const controllerRepository = AppDataSource.getRepository(FollowControll)

    const user = await userRepository.findOne({
        where:{
            id: userId
        }        
    })

    if(!user) throw new AppError("User not found", 404)
        
    const follow = await userRepository.findOne({
        where:{
            id: followId
        }        
    })
        
    if(!follow) throw new AppError("User not found", 404)
        
    const followControll = controllerRepository.create({
        user,
        follow               
    })

    if(userId === followId) throw new AppError('Can not follow yourself', 401)

    const findFollow = await controllerRepository.createQueryBuilder("controll")
    .where("controll.user = :user", {user: userId})
    .andWhere("controll.follow = :follow",{follow: followId})
    .getOne()               

    if(findFollow) throw new AppError('Can not follow again', 401)

    await controllerRepository.save(followControll)
                
    return followControll
}

export default addFriendService;