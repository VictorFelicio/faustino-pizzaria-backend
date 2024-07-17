import { Request, Response } from 'express';
import { CreateCategoriesService } from '../../services/category/category-create-service';

class CreateCategoriesController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;
        const createCategoriesService = new CreateCategoriesService();

        const category = await createCategoriesService.execute({ name });

        return res.json(category);
    }
}

export { CreateCategoriesController };
