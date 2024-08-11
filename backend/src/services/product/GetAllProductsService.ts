import prismaClient from "../../prisma";

interface productRequest{
    category_id: string;
}

class GetAllProductsService{
    async execute({ category_id }: productRequest){
        
        const findAllProducts = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        })

        return findAllProducts
    }
}

export { GetAllProductsService }