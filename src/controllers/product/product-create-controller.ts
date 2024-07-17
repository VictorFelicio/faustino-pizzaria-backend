import { Request, Response } from 'express';
import { ProductCreateService } from '../../services/product/product-create-service';

class ProductCreateController {
    async handle(req: Request, res: Response) {
        const productCreateService = new ProductCreateService();

        const { name, price, description, category_id } = req.body;

        if (!req.file) {
            throw new Error('error upload file');
        } else {
            const { filename: banner } = req.file;

            const product = await productCreateService.execute({
                name,
                price,
                description,
                banner,
                category_id,
            });
            return res.json(product);
        }
    }
}

export { ProductCreateController };
