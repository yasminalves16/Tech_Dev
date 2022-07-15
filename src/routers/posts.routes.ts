import { Router } from "express";
import updatePostController from "../controllers/posts/updatePost.controller";
import createPostController from "../controllers/posts/createPost.controller";
import ensureAuthMiddleware from "../middlewares/verifyToken.middleware";

const postsRoutes = Router();

postsRoutes.post("", /*ensureAuthMiddleware*/ createPostController);
//postsRoutes.patch(":id", updatePostController);

export default postsRoutes;
