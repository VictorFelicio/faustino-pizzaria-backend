import { Request, Response } from 'express';
import { OrderFinishService } from '../../services/order/order-finish.service';

class OrderFinishController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;

        const orderFinishService = new OrderFinishService();

        const order = await orderFinishService.execute({ order_id });

        return res.json(order);
    }
}

export { OrderFinishController };
