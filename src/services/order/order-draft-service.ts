import { prismaClient } from '../../prisma';

interface OrderPayload {
    order_id: string;
}

class OrderDraftService {
    async execute({ order_id }: OrderPayload) {
        const order = await prismaClient.order.update({
            where: {
                id: order_id,
            },
            data: {
                draft: false,
                updated_at: new Date(),
            },
        });

        return order;
    }
}

export { OrderDraftService };
