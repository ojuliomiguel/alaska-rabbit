import express, { Request, Response}  from 'express';
import { booksRoutes} from './routes/index'

const app = express();

app.use()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(3010, () => {
  console.log('Server has been initialized')
});