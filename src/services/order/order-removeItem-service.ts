import { prismaClient } from '../../prisma';

interface ItemPayload {
    item_id: string;
}

class OrderRemoveItemService {
    async execute({ item_id }: ItemPayload) {
        const item = await prismaClient.item.delete({
            where: {
                id: item_id,
            },
        });

        return item;
    }
}

export { OrderRemoveItemService };
