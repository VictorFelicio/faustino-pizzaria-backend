import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';

const routers = Router();

routers.post('/users', new CreateUserController().handle);

export { routers };
