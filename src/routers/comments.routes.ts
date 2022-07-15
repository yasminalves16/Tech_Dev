import { Router } from "express";
import createCommentController from "../controllers/comments/createComment.controller";
import verifyToken from "../middlewares/verifyToken.middleware";
import listCommentsService from "../services/comments/listComments.service";

const commentRoutes = Router();

commentRoutes.post("/:postId", verifyToken, createCommentController )
commentRoutes.get("/:postId", verifyToken, listCommentsService)
commentRoutes.delete("/:postId", verifyToken,)
commentRoutes.patch("/:postId",  verifyToken,)

export default commentRoutes;