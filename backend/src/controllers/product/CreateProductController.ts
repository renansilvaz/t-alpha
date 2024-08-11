import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController{
    async handle(req: Request, res: Response){
        const { name, description, category, category_id, price, stock } = req.body;

        const createProductService = new CreateProductService();

        const product = await createProductService.execute({
            name,
            description,
            category,
            category_id,
            price,
            stock
        });

        return res.json(product)
    }
}

export { CreateProductController }