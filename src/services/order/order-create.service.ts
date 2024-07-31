import { prismaClient } from '../../prisma';

interface OrderPayload {
    table: number;
    name: string;
}

class OrderCreateService {
    async execute({ name, table }: OrderPayload) {
        const order = await prismaClient.order.create({
            data: {
                table: table,
                name: name,
            },
        });

        return order;
    }
}

export { OrderCreateService };
