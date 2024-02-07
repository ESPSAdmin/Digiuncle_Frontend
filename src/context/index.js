import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { CartContext } from "./cartContext/CartContext";
import { ProductContext } from "./productContext/ProductContext";

export {default as AuthContextProvider} from './authContext/AuthContext';
export {default as CartContextProvider} from './cartContext/CartContext';
export {default as ProductContextProvider} from "./productContext/ProductContext"


export const useAuthContext = () => useContext(AuthContext);
export const useCartContext = () => useContext(CartContext);
export const useProductContext = () => useContext(ProductContext)