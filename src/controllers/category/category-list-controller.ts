import { Request, Response } from 'express';
import { CategoryListService } from '../../services/category/category-list-service';

class CategoryListController {
    async handle(req: Request, res: Response) {
        const listCategoryService = new CategoryListService();

        const categories = await listCategoryService.execute();

        res.json(categories);
    }
}

export { CategoryListController };
