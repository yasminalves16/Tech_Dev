import { Request, Response, NextFunction } from "express";
import deleteCommentService from "../../services/comments/deleteComment.service";

const deleteCommentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user;
    const commentId = req.params.commentId;

    const deletedComment = await deleteCommentService(userId, commentId);

    return res.status(204).json({
      message: deletedComment,
    });
  } catch (error) {
    next(error);
  }
};

export default deleteCommentController;
