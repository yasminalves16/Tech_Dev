import { Request, Response, NextFunction } from "express";
import deletePostService from '../../services/posts/deletePost.service';
import { AppError } from "../../errors/AppError";

const deletePostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const userId = req.user;
      await deletePostService(id, userId);
      return res.status(204).send()

    } catch (error) {
      next(error)
    }
  }

  export default deletePostController