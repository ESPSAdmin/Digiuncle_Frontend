import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { CartContext } from "./cartContext/CartContext";

export {default as AuthContextProvider} from './authContext/AuthContext';
export {default as CartContextProvider} from './cartContext/CartContext';


export const useAuthContext = () => useContext(AuthContext);
export const useCartContext = () => useContext(CartContext);