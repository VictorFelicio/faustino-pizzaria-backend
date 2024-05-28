import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { routers } from './routes';

const server = express();

server.use(express.json());

server.use(routers);

server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message,
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});

server.listen(3333, () => console.log('Server list on port :3333!!'));
