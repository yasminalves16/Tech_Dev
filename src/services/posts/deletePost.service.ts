import { AppDataSource } from "../../data-source";
import { Post } from "../../entities/post.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deletePostService = async (  id: string, userId: string): Promise<void> => {

    const postRepository = AppDataSource.getRepository(Post);
  
    const post = await postRepository.findOne({ where: { id } });

  if (!post) {
    throw new AppError("post not found", 404);
  }

  if (post.user.id !== userId) {
    throw new AppError("Cannot delete this post", 401);
  }

  await postRepository.delete(post!.id);
};

export default deletePostService;