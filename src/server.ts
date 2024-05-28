import express from 'express';
import { routers } from './routes';

const server = express();

server.use(express.json());

server.use(routers);

server.listen(3333, () => console.log('Server list on port :3333!!'));
