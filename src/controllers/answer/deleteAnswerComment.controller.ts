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
    await deleteAnswerCommentService(
      userId,
      answerId
    );

    return res.status(200).json({message: "Answer deleted with success"})

  } catch (error) {
    next(error);
  }
};

export default deleteAnswerCommentController;
