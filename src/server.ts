import { Config } from './config/config';
import app from './app';

const PORT = Config.port;

app.listen(21033, () => console.log(`server listening on port 21033`));
