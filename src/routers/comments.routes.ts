import { Router } from "express";
import createCommentController from "../controllers/comments/createComment.controller";
import listCommentsController from "../controllers/comments/listComments.controller";
import updateCommentController from "../controllers/comments/updateComment.controller";
import verifyToken from "../middlewares/verifyToken.middleware";

const commentRoutes = Router();

commentRoutes.post("/:postId", verifyToken, createCommentController )
commentRoutes.get("/:postId", verifyToken, listCommentsController)
commentRoutes.delete("/:postId", verifyToken,)
commentRoutes.patch("/:postId",  verifyToken, updateCommentController)

export default commentRoutes;