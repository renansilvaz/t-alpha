import { Request, Response } from "express";
import { CreateUsersServices } from "../../services/user/CreateUsersServices"


class CreateUserController{
    async handle(req: Request, res: Response){
        const { name, taxNumber, mail, phone, password } = req.body;

        const createUserService = new CreateUsersServices();

        const user = await createUserService.execute({
            name, 
            taxNumber, 
            mail, 
            phone, 
            password
        });
        return res.json(user)
    }
}

export { CreateUserController }