import express from 'express';
import routes from './routers/routes';
import "express-async-errors"
import handleAppErrorMiddeware from './middlewares/handleAppError.middleware';

const app = express();

app.use(express.json());

app.use('/', routes);

app.use(handleAppErrorMiddeware)

export default app;
