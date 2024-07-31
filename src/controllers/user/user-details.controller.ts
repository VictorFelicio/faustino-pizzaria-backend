import { Request, Response } from 'express';
import { UserDetailsService } from '../../services/user/user-details.service';

class UserDetailsController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const detailsUserService = new UserDetailsService();

        const user = await detailsUserService.execute(user_id);

        return res.json(user);
    }
}

export { UserDetailsController };
