import { prismaClient } from '../../prisma';
import { AuthTypes } from '../types/AuthTypes';
import { compare } from 'bcrypt';

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

        return { ok: 'autenticado' };
    }
}

export { AuthUserService };
