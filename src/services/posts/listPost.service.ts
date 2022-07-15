import { Post } from "../../entities/post.entity"
import {AppDataSource} from "../../data-source"
import { AppError } from "../../errors/AppError";

const listPostsService = async (pg: any, tk: any):Promise<any>=> {

  if(Number(pg)<=0 || Number(tk) <=0){
    throw new AppError("invalid number page or invalid take")
  }

  const take= tk || 20
  const page= pg || 1;
  const skip= (page-1) * take ;
  const userRepository = AppDataSource.getRepository(Post)

  const users = await userRepository.findAndCount(
    {
        take: take,
        skip: skip
    }
);
  
const [result, total]= users;
const lastPage=Math.ceil(total/take);

if(page > lastPage){
  throw new AppError('lastPage exceeded')
}

return {
  statusCode: 'success',
  count: total,
  currentPage: page, 
  lastPage: lastPage,
  posts: [...result],
}
}

export default listPostsService