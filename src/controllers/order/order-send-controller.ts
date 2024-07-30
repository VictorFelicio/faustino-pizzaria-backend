import { Request, Response } from 'express';
import { OrderSendService } from '../../services/order/order-send-service';

class OrderSendController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;

        const orderSendService = new OrderSendService();

        const order = await orderSendService.execute({ order_id });

        return res.json(order);
    }
}

export { OrderSendController };
