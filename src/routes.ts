import { Router } from 'express';

import { isAuthtenticated } from './controllers/middlewares/isAuthenticated';
import { UserDetailsController } from './controllers/user/user-details-controller';
import { UserCreateController } from './controllers/user/user-create-controller';
import { AuthUserController } from './controllers/auth/auth-user-controller';
import { CategoryCreateController } from './controllers/category/category-create-controller';
import { CategoryListController } from './controllers/category/category-list-controller';
import { ProductCreateController } from './controllers/product/product-create-controller';

import uploadConfig from '../src/config/multer';
import multer from 'multer';
import { ProductListByCategoryController } from './controllers/product/product-listBycategory-controller';
import { OrderCreateController } from './controllers/order/order-create-controller';
import { OrderRemoveController } from './controllers/order/order-remove-controller';
import { OrderAddItemController } from './controllers/order/order-addItem-controller';
import { OrderRemoveItemController } from './controllers/order/order-RemoveItem-controller';
import { OrderSendController } from './controllers/order/order-send-controller';
import { OrderListController } from './controllers/order/order-list-controller';

const routers = Router();

const upload = multer(uploadConfig.upload('./temp'));
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
routers.post(
    '/product',
    isAuthtenticated,
    upload.single('file'),
    new ProductCreateController().handle
);

routers.get(
    '/product/category',
    isAuthtenticated,
    new ProductListByCategoryController().handle
);

// -- ORDER ROUTERS -- //
routers.get('/order', isAuthtenticated, new OrderListController().handle);

routers.post('/order', isAuthtenticated, new OrderCreateController().handle);
routers.post(
    '/order/item',
    isAuthtenticated,
    new OrderAddItemController().handle
);
routers.delete('/order', isAuthtenticated, new OrderRemoveController().handle);
routers.delete(
    '/order/remove/item',
    isAuthtenticated,
    new OrderRemoveItemController().handle
);

routers.patch('/order', isAuthtenticated, new OrderSendController().handle);

export { routers };
