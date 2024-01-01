import express, {Request, Response} from 'express';

export const routeMisc = express.Router();

routeMisc.get('/ping', (req: Request, res: Response) => {
  res.send('pong');
});
