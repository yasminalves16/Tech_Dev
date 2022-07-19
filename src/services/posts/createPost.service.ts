import { IPostRequest, IPost } from "../../interfaces/posts";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { Post } from "../../entities/post.entity";
import { AppError } from "../../errors/AppError";


const createPostService = async (
  { description, media }: IPostRequest,
  userId: string
): Promise<IPost> => {
  const postRepository = AppDataSource.getRepository(Post);
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where:{
      id: userId
    }
  })

  if(!user){
    throw new AppError("user not found", 404)
  }

  

  const post = {
    user,
    description,
    media,
  };

  const newPost = postRepository.create(post);

  await postRepository.save(newPost);

  return newPost;
};

export default createPostService;
