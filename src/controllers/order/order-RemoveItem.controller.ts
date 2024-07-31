import { Request, Response } from 'express';
import { OrderRemoveItemService } from '../../services/order/order-removeItem.service';

class OrderRemoveItemController {
    async handle(req: Request, res: Response) {
        const item_id = req.query.item_id as string;

        const orderRemoveItemService = new OrderRemoveItemService();

        const item = await orderRemoveItemService.execute({ item_id });

        res.json(item);
    }
}

export { OrderRemoveItemController };
