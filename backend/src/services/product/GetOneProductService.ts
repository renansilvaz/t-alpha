import prismaClient from "../../prisma";

interface ProductRequest{
    id: string;
}

class GetOneProductService{
    async execute({ id }: ProductRequest){
        const findOneProduct = await prismaClient.product.findMany({
            where:{
                id: id
            }
        })

        return findOneProduct
    }
}

export { GetOneProductService }