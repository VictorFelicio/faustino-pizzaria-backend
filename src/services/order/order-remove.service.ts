import { prismaClient } from '../../prisma';

interface OrderPayload {
    order_id: string;
}

class OrderRemoveService {
    async execute({ order_id }: OrderPayload) {
        const order = await prismaClient.order.delete({
            where: {
                id: order_id,
            },
        });

        return order;
    }
}

export { OrderRemoveService };
