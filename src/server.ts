import {config} from './config';
import {app} from './app';

app.listen(config.server.port, () => {
  console.log(`[server]: Server is running at http://localhost:${config.server.port}`);
});
