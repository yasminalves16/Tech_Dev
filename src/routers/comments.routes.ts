import { Router } from "express";
import createCommentController from "../controllers/comments/createComment.controller";
import deleteCommentController from "../controllers/comments/deleteComment.controller";
import listCommentsController from "../controllers/comments/listComments.controller";
import updateCommentController from "../controllers/comments/updateComment.controller";
import verifyToken from "../middlewares/verifyToken.middleware";

const commentRoutes = Router();

commentRoutes.post("/:postId", verifyToken, createCommentController);
commentRoutes.get("/:postId", verifyToken, listCommentsController);
commentRoutes.delete("/:commentId", verifyToken, deleteCommentController);
commentRoutes.patch("/:commentId", verifyToken, updateCommentController);

export default commentRoutes;
