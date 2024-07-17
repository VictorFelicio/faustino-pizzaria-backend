import { prismaClient } from '../../prisma';
import { UserType } from '../types/UserTypes';
import { UserMessageEnum } from './enum/UserMessageEnum';
import { CreateUserValidator } from './utils/CreateUserValidator';

import { hash } from 'bcrypt';

class UserCreateService {
    async execute({ name, email, password }: UserType) {
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email,
            },
        });

        if (userAlreadyExists) {
            throw new Error(UserMessageEnum.EMAIL_ALREADY_EXIST);
        }

        const userStatus = CreateUserValidator.validate({
            name,
            email,
            password,
        });

        if (!userStatus.isValid) {
            throw new Error(userStatus.message);
        }

        const passwordHash = await hash(password, 8);

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
    }
}

export { UserCreateService };
