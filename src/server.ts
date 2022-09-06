import { Config } from './config/config';
import app from './app';

const PORT = Config.port;

app.listen(3003, () => console.log(`server listening on port 3003`));
