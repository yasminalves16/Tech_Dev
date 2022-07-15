import { AppDataSource } from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { Post } from "../../entities/post.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import { IComment } from "../../interfaces/comments"

const createCommentService = async (postId: string, userId: string, comment: IComment): Promise<Comment> =>{
  const commentsRepository = AppDataSource.getRepository(Comment)
  const postRepository = AppDataSource.getRepository(Post)
  const userRepository = AppDataSource.getRepository(User)

  const post = await postRepository.findOne({
    where: {
      id: postId
    }
  })

  const user = await userRepository.findOne({
    where: {
      id: userId
    }
  })

  if(!post){
    throw new AppError("post not found", 404)
  }

  if(!user){
    throw new AppError("user not found", 404)
  }

  const createComment = {
    description: comment.description,
    post,
    user
  }

  const newComment = commentsRepository.create(createComment)

  await commentsRepository.save(newComment)

  return newComment
}

export default createCommentService