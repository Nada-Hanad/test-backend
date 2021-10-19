import express, { Application, Request, Response, Router } from 'express';
import postsRoute from './routers/postsRouter';
import cors from 'cors';

const db = require('./config/db');
const app: Application = express();
const router: Router = express.Router();

app.use(express.json());

postsRoute(router);

app.use(cors({ origin: 'http://localhost:3001' }));
app.use(router);
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello world' });
});

const port = 3000;
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
