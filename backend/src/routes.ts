import { Router } from "express";
//import dos usuários
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController"
import { DetailuserController } from "./controllers/user/DetailUserController";

//import dos produtos
import { CreateProductController } from "./controllers/product/CreateProductController";
import { GetOneProductController } from "./controllers/product/GetOneProductController";
import { GetAllProductController } from "./controllers/product/GetAllProductController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { DeletProductController } from "./controllers/product/DeletProductController";

//import da verificação de usuário logado
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();
// Rotas de usuário
router.post('/api/auth/register', new CreateUserController().handle)
router.post('/api/auth/login', new AuthUserController().handle)
router.get('/detailUser', isAuthenticated, new DetailuserController().handle)

//Rota para categoria geral dos produtos
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

//Rotas de produto
router.post('/api/products/create-product', isAuthenticated, new CreateProductController().handle)
router.get('/api/products/get-all-products', isAuthenticated, new GetAllProductController().handle)
router.get('/api/products/get-one-product', isAuthenticated, new GetOneProductController().handle)
router.delete('/api/products/delete-product', isAuthenticated, new DeletProductController().handle)
export { router };