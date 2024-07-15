import { prismaClient } from '../../prisma';

interface CategoryPayload {
    name: string;
}

class CreateCategoriesService {
    async execute({ name }: CategoryPayload) {
        console.log(name);

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

export { CreateCategoriesService };
