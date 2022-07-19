import { AppDataSource } from "../../data-source";
import { Answer } from "../../entities/answerComents.entity";
import { Comment } from "../../entities/comment.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const createAnswerService = async (commentId: string, userId: string, answer: Answer): Promise<Answer> => {
  const answerRepository = AppDataSource.getRepository(Answer)
  const userRepository = AppDataSource.getRepository(User)
  const commentsRepository = AppDataSource.getRepository(Comment)

  const user = await userRepository.findOne({
    where: {
      id: userId
    }
  })

  const comment = await commentsRepository.findOne({
    where: {
      id: commentId
    }
  })

  if(!comment){
    throw new AppError("post not found", 404)
  }

  if(!user){
    throw new AppError("user not found", 404)
  }

  const createAnswer = {
    ...answer,
    comment,
    user
  }

  const newAnswer = answerRepository.create(createAnswer)

  await answerRepository.save(newAnswer)

  return newAnswer
}

export default createAnswerService