import { Request, Response } from 'express';
import { OrderListService } from '../../services/order/order-list.service';

class OrderListController {
    async handle(req: Request, res: Response) {
        const orderListService = new OrderListService();

        const orders = await orderListService.execute();

        return res.json(orders);
    }
}

export { OrderListController };
