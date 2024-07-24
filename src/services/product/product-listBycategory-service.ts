import { prismaClient } from '../../prisma';

interface ProductPayload {
    category_id: string;
}

class ProductListByCategoryService {
    async execute({ category_id }: ProductPayload) {
        const products = prismaClient.product.findMany({
            where: {
                category_id: category_id,
            },
        });

        return products;
    }
}

export { ProductListByCategoryService };
