import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController {
    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const createUserService = new CreateUserService();

        try {
            const user = await createUserService.execute({
                name,
                email,
                password,
            });

            return res.status(201).json(user);
        } catch (error: Error | any) {
            return res.status(400).json(error.message);
        }
    }
}

export { CreateUserController };
