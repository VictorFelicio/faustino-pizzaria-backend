import { Request, Response } from 'express';
import { CategoryCreateService } from '../../services/category/category-create-service';

class CategoryCreateController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;
        const createCategoriesService = new CategoryCreateService();

        const category = await createCategoriesService.execute({ name });

        return res.json(category);
    }
}

export { CategoryCreateController };
