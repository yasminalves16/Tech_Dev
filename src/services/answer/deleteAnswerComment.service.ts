import { AppDataSource } from "../../data-source";
import { Answer } from "../../entities/answerComents.entity";
import { Comment } from "../../entities/comment.entity";
import { AppError } from "../../errors/AppError";

const deleteAnswerCommentService = async (userId: string, answerId: string) => {
  const answer = AppDataSource.getRepository(Answer);

  const answerComment = await answer.findOne({
    where: { id: answerId },
    relations: { comment: true, user: true },
  });

  if (!answerComment) {
    throw new AppError("Comment answer not found", 404);
  }

  if (answerComment.user.id !== userId) {
    throw new AppError("Cannot delete this comment answer", 401);
  }

  await answer.delete(answerComment.id);

  return "Comment answer is deleted with success";
};

export default deleteAnswerCommentService;
