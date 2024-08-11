import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
    name: string;
    taxNumber: string;
    mail: string;
    phone: string;
    password: string;
}

class CreateUsersServices{
    async execute({name, taxNumber, mail, phone, password}: UserRequest){
        if(!taxNumber){
            throw new Error("CPF/CNPJ incorreto!");
            
        }

        const userAlreadyExiste = await prismaClient.user.findFirst({
            where:{
                taxNumber: taxNumber
            }
        })

        if(userAlreadyExiste){
            throw new Error("CPF/CNPJ já cadastrado!");
            
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                name: name,
                taxNumber: taxNumber,
                mail: mail,
                phone: phone,
                password: passwordHash,
            },
            select:{
                id: true,
                name: true,
                taxNumber: true,
                mail: true,
                phone: true
            }
        })

        return user;
    }
}

export { CreateUsersServices }