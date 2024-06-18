import { prismaClient } from '../../prisma';
import { UserType } from '../types/UserTypes';
import { CreateUserValidator } from './utils/CreateUserValidator';

class CreateUserService {
    async execute({ name, email, password }: UserType) {
        try {
            const userStatus = CreateUserValidator.validate({
                name,
                email,
                password,
            });

            if (!userStatus.isValid) {
                throw new Error(userStatus.message);
            }

            const userAlreadyExists = await prismaClient.user.findFirst({
                where: {
                    email: email,
                },
            });

            if (userAlreadyExists) {
                throw new Error('E-mail já cadastrado!');
            }

            const userCreated = await prismaClient.user.create({
                data: {
                    name: name,
                    email: email,
                    password: password,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            });

            return userCreated;
        } catch (error: Error | unknown) {
            console.log(error);
            return {
                message: 'Algo ocorreu, estamos trabalhando para consertar',
            };
        }
    }
}

export { CreateUserService };
