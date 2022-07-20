
import { Entity } from 'typeorm';
import { Comment } from './../../entities/comment.entity';
import { Answer } from './../../entities/answerComents.entity';
import { AppDataSource } from "../../data-source";
import { Post } from "../../entities/post.entity";
import { AppError } from "../../errors/AppError";

class DeleteComments{

  async execute( post: Post){

  const answerRepository = AppDataSource.getRepository(Answer);
  const commentRepository = AppDataSource.getRepository(Comment);


  const comments = post.comments.map((entity) => {
    return entity
  })

  const answers = comments.map((entity) => {
    return entity.answer
  })

  for(const arr of answers){
    for(const item of arr ){
      await answerRepository.delete(item.id)
    }
  }

  comments.forEach(async (entity) => {
    await commentRepository.delete(entity.id)
  })

};
}

const deletePostService = async (id: string, userId: string ) =>{

  const postRepository = AppDataSource.getRepository(Post);

  const post = await postRepository.findOne({ where: { id }, relations: ["comments"] });

  if (!post) {
    throw new AppError("post not found", 404);
  }
    
  if (post.user.id !== userId) {
    throw new AppError("Cannot delete this post", 401);
  }

  const deleteComments = new DeleteComments() 

  await deleteComments.execute(post)

  await postRepository.delete(post.id)

  const updatedPost = await postRepository.findOne({ where: { id }, relations: ["comments"] });

  return updatedPost
  
} 

export default deletePostService;