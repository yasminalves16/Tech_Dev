import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"

const deleteUserService = async (id: string): Promise<void> =>{
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({where: {id}})

  if(!user){
    throw new AppError("user not found", 404)
  }

  if(!user.active){
    throw new AppError("user already deactivated", 400)
  }

  user.active = false

  await userRepository.update({id}, user)
}

export default deleteUserService