import { GetAllProductsService } from "../../services/product/GetAllProductsService"
import { Response, Request } from "express";

class GetAllProductController{
    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string;

        const listAllProducts = new GetAllProductsService();

        const products = await listAllProducts.execute({
            category_id
        });

        return res.json(products)
    }
}

export { GetAllProductController }