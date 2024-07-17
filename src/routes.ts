import { Router } from 'express';

import { isAuthtenticated } from './controllers/middlewares/isAuthenticated';
import { UserDetailsController } from './controllers/user/user-details-controller';
import { UserCreateController } from './controllers/user/user-create-controller';
import { AuthUserController } from './controllers/auth/auth-user-controller';
import { CategoryCreateController } from './controllers/category/category-create-controller';
import { CategoryListController } from './controllers/category/category-list-controller';

const routers = Router();
// -- USER ROUTERS -- //
routers.get(
    '/user/details',
    isAuthtenticated,
    new UserDetailsController().handle
);

routers.post('/users', new UserCreateController().handle);
routers.post('/session', new AuthUserController().handle);

// -- CATEGORIES ROUTERS -- //
routers.get('/category', isAuthtenticated, new CategoryListController().handle);
routers.post(
    '/category',
    isAuthtenticated,
    new CategoryCreateController().handle
);

// -- PRODUCTS ROUTERS -- //

export { routers };
