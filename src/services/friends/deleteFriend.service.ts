import { AppDataSource } from "../../data-source"
import { FollowControll } from "../../entities/controll.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"

const deleteFriendService = async (userId: string, followId: string) =>{
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

  const findFollow = await controllerRepository.createQueryBuilder("controll")
  .where("controll.user = :user", {user: userId})
  .andWhere("controll.follow = :follow",{follow: followId})
  .getOne()

  if(!findFollow) throw new AppError ("Follow not found", 404)
  
  await controllerRepository.delete(findFollow!.id)
}

export default deleteFriendService