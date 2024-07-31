import { prismaClient } from '../../prisma';

class OrderListItemsService {
    async execute({ order_id }) {
        const itens = await prismaClient.item.findMany({
            where: {
                order_id: order_id,
            },
            include: {
                product: true,
                order: true,
            },
        });

        return itens;
    }
}

export { OrderListItemsService };
