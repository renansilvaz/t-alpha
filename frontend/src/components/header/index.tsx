import { Link } from "react-router-dom";
import logoImg from '../../assets/t-alpha.png'
import { FiUser, FiLogIn } from "react-icons/fi";

export function Header(){
    const signed = false;
    const loadingAuth = false;

    return(
        <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
            <header className="flex w-full max-w-7xl items-center justify-between px-4 mx-auto">
                <Link className="w-40" to={'/products'}>
                    <img src={logoImg} alt="logo" />
                </Link>
            <div className="flex flex-row gap-8">
                <Link
                className="bg-blue-300 p-2 rounded-lg font-semibold"
                 to={'/products/form'}>Criar novo produto</Link>

                <Link 
                className="bg-blue-300 p-2 rounded-lg font-semibold"
                to={'/products'}>Todos os produtos</Link>

                {!loadingAuth && signed && (
                <Link 
                className="mt-2"
                to="/">
                    <FiLogIn size={22} color="#000"/>
                </Link>
                )}

                {!loadingAuth && !signed && (
                <Link 
                className="mt-2"
                to="/">
                    <FiUser size={22} color="#000"/>
                </Link>
                )}
            </div>
            </header>
        </div>
    )
}