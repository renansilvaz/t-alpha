import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"

interface AuthRequest{
    taxNumber: string,
    password: string,
}

class AuthUserService{
    async execute({taxNumber, password}: AuthRequest){
        const user = await prismaClient.user.findFirst({
            where:{
                taxNumber: taxNumber
            }
        })
        if(!user){
            throw new Error("CPF/CNPJ ou senha incorretos!");
            }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("CPF/CNPJ ou senha incorretos!");  
        }

        const token = sign(
            {
                name: user.name,
                mail: user.mail
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            taxNumber: user.taxNumber,
            token: token
        }
    }
}

export { AuthUserService }