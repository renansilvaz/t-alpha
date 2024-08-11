import { createBrowserRouter } from "react-router-dom";

import { SignIn } from "./pages/signin";
import { Products } from "./pages/products";
import { SignUp } from "./pages/signup";
import ProductList from "./components/Product/ProductList";
import ProductForm from "./components/Product/ProductForm";

import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/list',
        element: <ProductList />
      },
      {
        path: '/products/form',
        element: <ProductForm />
      }
    ]
  },
      {
        path: '/',
        element: <SignIn />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
])

export { router };