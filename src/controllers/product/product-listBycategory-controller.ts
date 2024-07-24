import { Request, Response } from 'express';
import { ProductListByCategoryService } from '../../services/product/product-listBycategory-service';

class ProductListByCategoryController {
    async handle(req: Request, res: Response) {
        const productListByCategoryService = new ProductListByCategoryService();
        const category_id = req.query.category_id as string;

        const products = await productListByCategoryService.execute({
            category_id,
        });

        res.json(products);
    }
}

export { ProductListByCategoryController };
