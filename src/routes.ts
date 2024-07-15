import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/auth/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';
import { isAuthtenticated } from './controllers/middlewares/isAuthenticated';

const routers = Router();

routers.get(
    '/user/details',
    isAuthtenticated,
    new DetailsUserController().handle
);

routers.post('/users', new CreateUserController().create);
routers.post('/session', new AuthUserController().handle);

export { routers };
