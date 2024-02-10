import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { CartContext } from "./cartContext/CartContext";
import { ProductContext } from "./productContext/ProductContext";
import { WishlistContext } from "./wishlistContext/WishContext";

export {default as AuthContextProvider} from './authContext/AuthContext';
export {default as CartContextProvider} from './cartContext/CartContext';
export {default as ProductContextProvider} from "./productContext/ProductContext"
export {default as WishlistProvider} from "./wishlistContext/WishContext"


export const useAuthContext = () => useContext(AuthContext);
export const useCartContext = () => useContext(CartContext);
export const useProductContext = () => useContext(ProductContext)
export const useWishlistContext = () => useContext(WishlistContext)