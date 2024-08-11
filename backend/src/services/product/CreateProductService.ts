import prismaClient from "../../prisma";

interface ProductRequest{
    name: string;
    description?: string;
    category: string
    category_id: string;
    price: number;
    stock: number;
}

class CreateProductService{
    async execute({name, description, category, category_id, price, stock}: ProductRequest){
        const product = await prismaClient.product.create({
            data:{
                name: name,
                description: description,
                category: category,
                category_id: category_id,
                price: price,
                stock: stock,
            }
        })

        return product
    }
}

export { CreateProductService }