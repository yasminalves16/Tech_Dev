import express from "express";
import routes from "./routers/routes";
import "express-async-errors";
import handleAppErrorMiddeware from "./middlewares/handleAppError.middleware";
import loginRoute from "./routers/login.routes";

const app = express();

app.use(express.json());

app.use("/", routes);

app.use("/login", loginRoute);

app.use(handleAppErrorMiddeware);

export default app;
