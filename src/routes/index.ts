import {Express} from 'express';
import {routeMisc} from './misc';

export const registerRoutes = (app: Express) => {
  app.use('/misc', routeMisc);
};
