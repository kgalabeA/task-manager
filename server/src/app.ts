import express, { Express, Request, Response } from 'express';
import router from './routes/task.route';
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

const app: Express = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/tasks',router);
app.use(errorHandler);
app.use(notFoundHandler);

app.get('/', (req: Request, res: Response) => {
  console.log(__dirname);
  res.sendFile("/Users/macbook/Development/fun/task-manager/server/src/public/index.html");
});


export default app;