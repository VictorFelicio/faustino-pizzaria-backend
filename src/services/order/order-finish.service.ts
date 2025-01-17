import { prismaClient } from '../../prisma';

interface FinishPayload {
    order_id: string;
}

class OrderFinishService {
    async execute({ order_id }: FinishPayload) {
        const order = await prismaClient.order.update({
            where: {
                id: order_id,
            },
            data: {
                status: true,
            },
        });

        return order;
    }
}

export { OrderFinishService };
