import prismaClient from "../../prisma";

interface DeletProduct{
    id: string
}

class DeletProductService{
    async execute({id}: DeletProduct){
        const product = await prismaClient.product.delete({
            where:{
                id: id,
            }
        })

        return product
    }
}

export { DeletProductService }