import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exception();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exception() {
    this.server.use(async (err, req, res, next) => {
      return res.status(500).json({ error: 'Internal error' });
    });
  }
}

export default new App().server;