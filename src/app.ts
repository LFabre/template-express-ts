import express, {Express} from 'express';
import helmet from 'helmet';
import {registerRoutes} from '@routes';

export const app: Express = express();

app.use(helmet());

registerRoutes(app);
