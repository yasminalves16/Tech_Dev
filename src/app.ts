import express from "express";
import userRoutes from "./routers/users.routes";
import loginRoute from "./routers/login.routes";
import imageRoute from "./routers/image.routes";
import postsRoutes from "./routers/posts.routes"
import "express-async-errors";
import handleAppErrorMiddeware from "./middlewares/handleAppError.middleware";
import commentRoutes from "./routers/comments.routes";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.use("/login", loginRoute);

app.use("/media", imageRoute);

app.use("/posts", postsRoutes);

app.use("/comments", commentRoutes)

app.use(handleAppErrorMiddeware);



export default app;
