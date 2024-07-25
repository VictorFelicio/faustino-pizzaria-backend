import { prismaClient } from '../../prisma';

interface ItemPayload {
    order_id: string;
    product_id: string;
    amount: number;
}
class OrderAddItemService {
    async execute({ order_id, product_id, amount }: ItemPayload) {
        const item = prismaClient.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
                amount: amount,
            },
        });

        return item;
    }
}

export { OrderAddItemService };
