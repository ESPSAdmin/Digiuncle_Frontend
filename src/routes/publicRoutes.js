import { ProductCard, ProductDetail, ProductList } from "../components";
import {  Home, SignIn,SignUp } from "../pages";

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
    {
        path : '/productlist/:category',
        element : <ProductList/>,
    },
    {
        path : '*',
        element : <Home/>,
    },
];

