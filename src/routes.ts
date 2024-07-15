import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/auth/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';
import { isAuthtenticated } from './controllers/middlewares/isAuthenticated';
import { CreateCategoriesController } from './controllers/category/CreateCategoriesController';

const routers = Router();
// -- USER ROUTERS -- //
routers.get(
    '/user/details',
    isAuthtenticated,
    new DetailsUserController().handle
);

routers.post('/users', new CreateUserController().handle);
routers.post('/session', new AuthUserController().handle);

// -- CATEGORIES ROUTERS -- //

routers.post(
    '/category',
    isAuthtenticated,
    new CreateCategoriesController().handle
);

export { routers };
