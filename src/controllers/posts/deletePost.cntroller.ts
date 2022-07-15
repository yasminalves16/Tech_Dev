import { Request, Response } from "express";
import deletePostService from '../../services/posts/deletePost.service';
import { AppError } from "../../errors/AppError";

const deletePostController = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      const post = await deletePostService(id);

      return res.status(204).json({ message: 'Post deleted with sucess!' });

    } catch (error) {

      if (error instanceof AppError) {
        return res.status(error.statusCode).json({
          message: error.message,
        });
      }
    }
  }

  export default deletePostController