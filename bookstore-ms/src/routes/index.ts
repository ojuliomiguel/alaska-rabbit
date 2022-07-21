import { Router } from 'express';
import { booksRoutes } from './books-routes';

const routes = Router();

routes.get('/books', booksRoutes.list);

export { routes };
