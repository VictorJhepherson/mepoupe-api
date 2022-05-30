import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from '../src/documentation/swagger.json';

import averageRoutes from './routes/averageRoutes';
import cepRoutes from './routes/cepRoutes';
import infoRoutes from './routes/infoRoutes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.setupExpress();
    this.setupRoutes();
  }

  private setupExpress(): void {
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    this.app.use(cors());
  }

  private setupRoutes(): void {
    this.app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile));
    this.app.use('/info', infoRoutes);
    this.app.use('/average', averageRoutes);
    this.app.use('/cep', cepRoutes);
  }
}

export default new App().app;
