import { IPostRequest, IPost } from "../../interfaces/posts";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { Post } from "../../entities/post.entity";

const createPostService = async (
  { description, media }: IPostRequest,
  userId: string
): Promise<IPost> => {
  const postRepository = AppDataSource.getRepository(Post);

  const post = {
    userId,
    description,
    media,
  };

  const newPost = postRepository.create({ ...post });

  await postRepository.save(newPost);

  return newPost;
};

export default createPostService;
