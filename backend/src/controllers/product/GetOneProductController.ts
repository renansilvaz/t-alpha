import { Request, Response } from "express";
import { GetOneProductService } from "../../services/product/GetOneProductService";

class GetOneProductController{
    async handle(req: Request, res: Response){
        const id = req.query.id as string;

        const getOneProduct = new GetOneProductService();

        const product = await getOneProduct.execute({
            id
        });

        return res.json(product)
    }
}

export { GetOneProductController }