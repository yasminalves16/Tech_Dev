import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteCommentService = async (userId: string, commentId: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comment = await commentRepository.findOne({
    where: { id: commentId },
    relations: { user: true },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  if (comment.user.id !== userId) {
    throw new AppError("Cannot delete this comment", 401);
  }

  await commentRepository.delete(comment.id);

};

export default deleteCommentService;
