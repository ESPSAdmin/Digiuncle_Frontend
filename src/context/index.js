import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { CartContext } from "./cartContext/CartContext";
import { ProductContext } from "./productContext/ProductContext";
import { WishlistContext } from "./wishlistContext/WishContext";
import { GetContext } from "./getContext/GetContext";

export {default as AuthContextProvider} from './authContext/AuthContext';
export {default as CartContextProvider} from './cartContext/CartContext';
export {default as ProductContextProvider} from "./productContext/ProductContext"
export {default as WishlistProvider} from "./wishlistContext/WishContext"
export {default as GetContestProvider} from "./getContext/GetContext"


export const useAuthContext = () => useContext(AuthContext);
export const useCartContext = () => useContext(CartContext);
export const useProductContext = () => useContext(ProductContext)
export const useWishlistContext = () => useContext(WishlistContext)
export const useGetContext = () => useContext(GetContext)