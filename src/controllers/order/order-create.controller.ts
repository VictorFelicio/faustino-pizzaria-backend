import { Request, Response } from 'express';
import { OrderCreateService } from '../../services/order/order-create.service';

class OrderCreateController {
    async handle(req: Request, res: Response) {
        const orderCreateService = new OrderCreateService();

        const { table, name } = req.body;

        const order = await orderCreateService.execute({ table, name });

        res.json(order);
    }
}

export { OrderCreateController };
