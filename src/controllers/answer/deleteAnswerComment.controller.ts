import { Request, Response, NextFunction } from "express";
import deleteAnswerCommentService from "../../services/answer/deleteAnswerComment.service";

const deleteAnswerCommentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user;
    const answerId = req.params.answerId;
    const commentAnswerDeleted = await deleteAnswerCommentService(
      userId,
      answerId
    );

    return res.status(204).json({
      message: commentAnswerDeleted,
    });
  } catch (error) {
    next(error);
  }
};

export default deleteAnswerCommentController;
