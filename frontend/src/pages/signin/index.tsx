import { Link } from 'react-router-dom'
import logoImg from '../../assets/t-alpha.png'
import { Container } from '../../components/container'
import { api } from '../../services/app'
import { useNavigate } from 'react-router-dom'


export function SignIn(){
    const navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        "use server"
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
        const taxNumber = formData.get("taxNumber")
        const password = formData.get("password")
    
        if(taxNumber === '' || password === ''){
            return
        }try{
            const response = await api.post("/api/auth/login",{
                taxNumber,
                password
            })
    
            console.log(response)
    
        }catch(err){
            console.log(err)
            return
        }
        navigate("/Products")
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
                onSubmit={handleSubmit} 
                className='bg-white max-w-xl w-full rounded-lg p-4'>
                 
                  <div className='mb-3'> 
                    <input
                        className="w-full border-2 rounded-md h-11 px-2 outline-none"
                        required
                        type="string"
                        placeholder="Digite seu CPF ou CNPJ..."
                        name="taxNumber" />
                  </div>

                  <div className='mb-3'>  
                    <input
                        className="w-full border-2 rounded-md h-11 px-2 outline-none"
                        required 
                        type="password"
                        placeholder="**************"
                        name="password" />
                  </div>

                        <button type="submit" className='bg-zinc-900 w-full h-10 rounded-md text-white font-medium'>
                            Acessar
                        </button>

                        <a className='hover:underline' href="/signup">Ainda não possui uma conta? Cadastre-se</a>
                </form>
            </div>
        </Container>
    )
}