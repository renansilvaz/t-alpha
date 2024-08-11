import { Link, useNavigate } from 'react-router-dom'
import logoImg from '../../assets/t-alpha.png'
import { Container } from '../../components/container'
import { api } from '../../services/app'


export function SignUp(){
    const navigate = useNavigate()
    
    async function handleRegister(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name")
        const taxNumber = formData.get("taxNumber")
        const mail = formData.get("mail")
        const phone = formData.get("phone")
        const password = formData.get("password")
    
        if(name === '' || taxNumber === '' || mail === '' || phone === '' || password === ''){
            alert("Preencha todos os campos!")
            return;
        }
    
        try{
            await api.post("api/auth/register",{
                name,
                taxNumber,
                mail,
                phone,
                password
            })
        }catch(err){
            console.log("Error")
            console.log(err)
        }

        navigate("/")
    }

    return(
        <Container>
            <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4'>         
                <Link className='max-w-sm w-full mb-6 ml-32' to="/">
                    <img 
                    src={logoImg} 
                    alt="logo" />
                </Link>

                <form
                onSubmit={handleRegister} 
                className='bg-white max-w-xl w-full rounded-lg p-4'>
                  <div className='mb-3'> 
                    <input
                        className="w-full border-2 rounded-md h-11 px-2 outline-none"
                        required 
                        type="string"
                        placeholder="Digite seu nome"
                        name="name" />
                  </div>

                  <div className='mb-3'>  
                    <input
                        className="w-full border-2 rounded-md h-11 px-2 outline-none"
                        required
                        type="text"
                        placeholder="Digite seu CPF ou CNPJ"
                        name="taxNumber" />
                  </div>
                  
                  <div className='mb-3'>  
                    <input
                        className="w-full border-2 rounded-md h-11 px-2 outline-none"
                        required 
                        type="email"
                        placeholder="Digite seu e-mail"
                        name="mail" />
                  </div>

                  <div className='mb-3'>  
                    <input
                        className="w-full border-2 rounded-md h-11 px-2 outline-none"
                        required 
                        type="phone"
                        placeholder="Digite seu telefone"
                        name="phone" />
                  </div>

                  <div className='mb-3'>  
                    <input
                        className="w-full border-2 rounded-md h-11 px-2 outline-none"
                        required 
                        type="password"
                        placeholder="***************"
                        name="password" />
                  </div>

                        <button type='submit' className='bg-zinc-900 w-full h-10 rounded-md text-white font-medium'>
                            Cadastrar
                        </button>

                        <a className='hover:underline' href="/">Já tem uma conta? Faça o login</a>
                </form>
            </div>
        </Container>
    )
}