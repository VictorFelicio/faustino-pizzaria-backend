import { Request, Response } from 'express';
import { OrderDraftService } from '../../services/order/order-draft.service';

class OrderDraftController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;

        const orderDraftService = new OrderDraftService();

        const order = await orderDraftService.execute({ order_id });

        return res.json(order);
    }
}

export { OrderDraftController };
