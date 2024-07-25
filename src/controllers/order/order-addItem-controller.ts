import { Request, Response } from 'express';
import { OrderAddItemService } from '../../services/order/order-addItem.';

class OrderAddItemController {
    async handle(req: Request, res: Response) {
        const { order_id, product_id, amount } = req.body;

        const orderAddItemService = new OrderAddItemService();

        const item = await orderAddItemService.execute({
            amount,
            order_id,
            product_id,
        });

        res.json(item);
    }
}

export { OrderAddItemController };
