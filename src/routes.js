import { Router } from 'express';
import HealthCheckController from './app/controllers/HealthCheckController';

const routes = new Router();

routes.get('/healthz', HealthCheckController.index);

export default routes;