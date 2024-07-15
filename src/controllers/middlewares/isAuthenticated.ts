import { NextFunction, Request, Response } from 'express';

export function isAuthtenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.log('middleware chamado');
    next();
}
