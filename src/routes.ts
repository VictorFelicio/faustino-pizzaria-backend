import { Router } from 'express';
import { CreateUserController } from './controllers/user/user-create-controller';
import { AuthUserController } from './controllers/auth/auth-user-controller';

import { DetailsUserController } from './controllers/user/user-details-controller';
import { isAuthtenticated } from './controllers/middlewares/isAuthenticated';
import { CreateCategoriesController } from './controllers/category/category-create-controller';
import { ListCategoryController } from './controllers/category/category-list-controller';

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

routers.get('/category', isAuthtenticated, new ListCategoryController().handle);
routers.post(
    '/category',
    isAuthtenticated,
    new CreateCategoriesController().handle
);

export { routers };
