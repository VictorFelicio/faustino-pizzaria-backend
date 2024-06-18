import { prismaClient } from '../../prisma';
import { UserType } from '../types/UserTypes';
import { CreateUserValidator } from './utils/CreateUserValidator';

import { hash } from 'bcrypt';

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

            const passwordHash = await hash(password, 8)

            const userCreated = await prismaClient.user.create({
                data: {
                    name: name,
                    email: email,
                    password: passwordHash,
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
