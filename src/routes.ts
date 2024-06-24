import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/auth/AuthUserController';

const routers = Router();

routers.post('/users', new CreateUserController().create);
routers.post('/session', new AuthUserController().hanle);

export { routers };
