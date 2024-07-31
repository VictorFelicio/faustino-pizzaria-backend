import { prismaClient } from '../../prisma';

interface CategoryPayload {
    name: string;
}

class CategoryCreateService {
    async execute({ name }: CategoryPayload) {
        if (!name || name.length < 3) {
            throw new Error('Nome inválido');
        }

        const category = await prismaClient.category.create({
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true,
            },
        });

        return category;
    }
}

export { CategoryCreateService };
