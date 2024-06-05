import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';

const routers = Router();

routers.get('/users', new CreateUserController().handle);
routers.post('/users', new CreateUserController().handle);

export { routers };
