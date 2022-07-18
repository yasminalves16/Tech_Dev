import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { IPost } from "../../interfaces/posts"
import { Post } from "../../entities/post.entity"

const updatePostService = async (
  id: string,
  userId: string,
  description: string
): Promise<IPost> => {
  const postRepository = AppDataSource.getRepository(Post);

  const post = await postRepository.findOneBy({ id });

  if (!post) {
    throw new AppError("post not found", 404);
  }
  
  console.log(post)

   if (post.user.id !== userId) {
    throw new AppError("cannot edit this post", 400);
  } 
  
  post.description = description;

  await postRepository.update({ id }, post);

  const updatedPost = await postRepository.findOneBy({ id });

  return updatedPost!;
};

export default updatePostService;
