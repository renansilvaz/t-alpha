import { Request, Response } from "express";
import { DeletProductService } from "../../services/product/DeletProductService";

class DeletProductController{
    async handle(req: Request, res: Response){
        const { id } = req.body;

        const deletProducService = new DeletProductService();

        const product = await deletProducService.execute({
            id
        });

        return res.json(product)
    }
}

export { DeletProductController }