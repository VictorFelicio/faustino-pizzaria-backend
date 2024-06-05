import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            const createUserService = new CreateUserService();

            const user = await createUserService.execute({
                name,
                email,
                password,
            });

            return res.status(201).json(user);
        } catch (error: Error | unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }

            return {
                message: 'Algo ocorreu, estamos trabalhando para consertar',
            };
        }
    }
}

export { CreateUserController };
