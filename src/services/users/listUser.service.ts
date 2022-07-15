import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/users";

const listUserService = async (id: string): Promise<IUserRequest> =>{
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where:{
      id
    }
  })

  if(!user){
    throw new AppError("user not found", 404)
  }

  return user
}

export default listUserService