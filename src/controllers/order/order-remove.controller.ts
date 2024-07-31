import { Request, Response } from 'express';
import { OrderRemoveService } from '../../services/order/order-remove.service';

class OrderRemoveController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;

        const orderRemoveService = new OrderRemoveService();

        const orderDeleted = await orderRemoveService.execute({ order_id });

        res.json(orderDeleted);
    }
}

export { OrderRemoveController };
