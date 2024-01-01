import express, {Express, Request, Response} from 'express';

export const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Template');
});

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong');
});
