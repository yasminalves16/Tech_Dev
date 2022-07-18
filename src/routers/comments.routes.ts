import { Router } from "express";
import createCommentController from "../controllers/comments/createComment.controller";
import deleteCommentController from "../controllers/comments/deleteComment.controller";
import verifyToken from "../middlewares/verifyToken.middleware";
import listCommentsService from "../services/comments/listComments.service";

const commentRoutes = Router();

commentRoutes.post("/:postId", verifyToken, createCommentController);
commentRoutes.get("/:postId", verifyToken, listCommentsService);
commentRoutes.delete("/:commentId", verifyToken, deleteCommentController);
commentRoutes.patch("/:commentId", verifyToken);

export default commentRoutes;
