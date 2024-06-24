import { UserType } from '../../types/UserTypes';
import { UserMessageEnum } from '../enum/UserMessageEnum';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export class CreateUserValidator {
    static validate({ name, email, password }: UserType): {
        isValid: boolean;
        message?: string;
    } {
        if (!name)
            return {
                isValid: false,
                message: UserMessageEnum.NAME_NOT_DEFINED,
            };
        if (!emailRegex.test(email))
            return {
                isValid: false,
                message: UserMessageEnum.INVALID_EMAIL,
            };
        if (password.length < 4)
            return {
                isValid: false,
                message: UserMessageEnum.SHORT_PASSWORD,
            };

        return { isValid: true };
    }
}
