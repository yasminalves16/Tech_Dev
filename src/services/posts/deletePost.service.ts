import { AppDataSource } from "../../data-source";
import { Post } from "../../entities/post.entity";

const deletePostService = async (id: string) => {
  const postRepo = AppDataSource.getRepository(Post);

  const post = await postRepo.findOne({ where: { id } });

  await postRepo.delete(post!.id);

  return true;
};

export default deletePostService;