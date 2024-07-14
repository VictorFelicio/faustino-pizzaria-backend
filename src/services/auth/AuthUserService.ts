import { prismaClient } from '../../prisma';
import { AuthTypes } from '../types/AuthTypes';
import { compare } from 'bcrypt';

import { sign } from 'jsonwebtoken';

class AuthUserService {
    async execute({ email, password }: AuthTypes) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new Error('Usuário não cadastrado');
        }

        const passwordMacth = await compare(password, user.password);

        if (!passwordMacth) {
            throw new Error('Usuario ou senha inválido');
        }

        const payloadJWT = {
            name: user.name,
            email: user.email,
        };

        const options = {
            subject: user.id,
            expiresIn: '01d',
        };

        const jwtsecret = process.env.JWT_SECRET;

        const token = sign(payloadJWT, jwtsecret, options);

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token,
        };
    }
}

export { AuthUserService };
