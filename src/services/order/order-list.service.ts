import { prismaClient } from '../../prisma';

class OrderListService {
    async execute() {
        const orders = await prismaClient.order.findMany({
            where: {
                draft: false,
                status: false,
            },
            orderBy: {
                created_at: 'asc',
            },
        });

        return orders;
    }
}

export { OrderListService };
