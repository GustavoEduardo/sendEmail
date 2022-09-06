import { Config } from './config/config';
import app from './app';

const PORT = Config.port;

app.listen(21051, () => console.log(`server listening on port 21051`));
