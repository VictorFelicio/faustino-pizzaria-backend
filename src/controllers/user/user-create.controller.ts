import { Request, Response } from 'express';
import { UserCreateService } from '../../services/user/user-create.service';

class UserCreateController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const createUserService = new UserCreateService();

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

export { UserCreateController };
