import { Container } from "../../components/container";
import tvImg from '../../assets/1549554514.jpg'

export function Products(){

    return(
        <Container>
           <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
                <input 
                className="w-full border-2 rounded-lg h-9 px-3 outline-none"
                placeholder="Pesquise pelo produto..."
                type="text" />

                <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium">
                    Buscar
                </button>
            </section> 


            <h1 className="font-bold text-center mt-6 text-2xl mb-4">
                Produtos
            </h1>

            <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
               
               
                <section className="w-full bg-white rounded-lg">
                    <img 
                    className="w-full rounded-lg mb-2 max-h-72 object-contain hover:scale-105 transition-all"
                    src={tvImg} 
                    alt="LogoProduto" />
                    
                    <p className="font-bold mt-1 mb-2 px-2">Tv 55 polegadas</p>

                    <div className="flex flex-col px-2">
                        <span className="text-zinc-700 mb-6">Samsung</span>
                        <strong>R$ 3.499,99</strong>
                    </div>
                </section>

                <section className="w-full bg-white rounded-lg">
                    <img 
                    className="w-full rounded-lg mb-2 max-h-72 object-contain hover:scale-105 transition-all"
                    src={tvImg} 
                    alt="LogoProduto" />
                    
                    <p className="font-bold mt-1 mb-2 px-2">Tv 55 polegadas</p>

                    <div className="flex flex-col px-2">
                        <span className="text-zinc-700 mb-6">Samsung</span>
                        <strong>R$ 3.499,99</strong>
                    </div>
                </section>

                <section className="w-full bg-white rounded-xl">
                    <img 
                    className="w-full rounded-lg mb-2 max-h-72 object-contain hover:scale-105 transition-all"
                    src={tvImg} 
                    alt="LogoProduto" />
                    
                    <p className="font-bold mt-1 mb-2 px-2">Tv 55 polegadas</p>

                    <div className="flex flex-col px-2">
                        <span className="text-zinc-700 mb-6">Samsung</span>
                        <strong className="mb-4">R$ 3.499,99</strong>
                    </div>
                </section>

            </main>
        </Container>
    )
}