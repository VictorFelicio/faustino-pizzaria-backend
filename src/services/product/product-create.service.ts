import { prismaClient } from '../../prisma';

export interface ProductPayload {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

class ProductCreateService {
    async execute({
        name,
        banner,
        category_id,
        description,
        price,
    }: ProductPayload) {
        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
            },
        });

        return product;
    }
}

export { ProductCreateService };
