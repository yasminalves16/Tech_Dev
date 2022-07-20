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

    await deleteCommentService(userId, commentId);

    return res.status(200).json({message: "Comment deleted with success"})
    
  } catch (error) {
    next(error);
  }
};

export default deleteCommentController;
