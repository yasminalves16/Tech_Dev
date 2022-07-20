import { Request, Response, NextFunction } from "express";
import deletePostService from '../../services/posts/deletePost.service';

const deletePostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const userId = req.user;
      await deletePostService(id, userId);
      return res.status(200).json({message: "Post deleted with success"})

    } catch (error) {
      next(error)
    }
  }

  export default deletePostController