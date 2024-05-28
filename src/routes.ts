import { Router, Request, Response } from 'express';

const routers = Router();

routers.get('/home', (req: Request, res: Response) => {
    return res.json({ ok: 'Rota ouvindo' });
});


export {routers}