import { AppDataSource } from "../../data-source"
import { Answer } from "../../entities/answerComents.entity"
import { Comment } from "../../entities/comment.entity"

const listAnswerService = async (commentId: string): Promise<Answer[]> =>{
  const commentsRepository = AppDataSource.getRepository(Comment)

  const comment = await commentsRepository.findOne({
    where: {
      id: commentId
    },
    relations:{
      answer: true
    }
  })

  return comment!.answer
}

export default listAnswerService