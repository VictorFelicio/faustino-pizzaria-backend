import { Request, Response } from 'express';
import { OrderListItemsService } from '../../services/order/order-listItems-service';

class OrderListItemsController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;

        const orderListItemsService = new OrderListItemsService();

        const items = await orderListItemsService.execute({ order_id });

        return res.json(items);
    }
}

export { OrderListItemsController };
