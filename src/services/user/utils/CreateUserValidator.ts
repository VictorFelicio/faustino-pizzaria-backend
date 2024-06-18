import { UserType } from '../../types/UserTypes';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export class CreateUserValidator {
    static validate({ name, email, password }: UserType): {
        isValid: boolean;
        message?: string;
    } {
        if (!name) return { isValid: false, message: 'Nome não definido' };
        if (!emailRegex.test(email))
            return { isValid: false, message: 'Email inválido' };
        if (password.length < 4)
            return {
                isValid: false,
                message: 'Senha deve ter pelo menos 4 caracteres',
            };

        return { isValid: true };
    }
}
