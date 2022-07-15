import { AppDataSource } from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { Post } from "../../entities/post.entity"

const listCommentsService = async (postId: string): Promise<Comment[]>=> {
  const postRepository = AppDataSource.getRepository(Post)

 const post = await postRepository.findOne({
  where:{
    id: postId
  }
 })

 return post!.comments
}

export default listCommentsService