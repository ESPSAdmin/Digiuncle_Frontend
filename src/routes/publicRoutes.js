import { ProductCard, ProductDetail, ProductList } from "../components";
import {  SignIn,SignUp } from "../pages";

export const authRoutes = [
    {
        path : '/login',
        element : <SignIn/>,
    },
    {
        path : '/signup',
        element : <SignUp/>,
    },
]

export const contentRoutes = [
    {
        path : '/products',
        element : <ProductCard/>,
    },
    {
        path : '/product/:id',
        element : <ProductDetail/>,
    },
    {
        path : '/productlist',
        element : <ProductList/>,
    },
];

