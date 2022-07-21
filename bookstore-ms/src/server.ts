import express, { Request, Response}  from 'express';
import { routes} from './routes'

const app = express();

app.use(routes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(3010, () => {
  console.log('Server has been initialized')
});