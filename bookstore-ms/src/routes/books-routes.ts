import express, { Request, Response, Router}  from 'express';

class BooksRoutes {
  constructor(private router: Router = express.Router()) {}

  public async list(req: Request, res: Response) {
    res.send([
      {
        title: 'The Hobbit',
        author: 'Tolkien'
      }
    ]); 
  }
}

const booksRoutes = new BooksRoutes();

export { booksRoutes };