import { Cart, CheckOut, Wishlist } from "../pages";
import Profile from "../pages/Profile";



export const privateRoutes = [
    {
        path : "/Cart",
        element : <Cart />
    },
    {
        path : "/profile",
        element : <Profile />
    },
    {
        path : "/checkout",
        element : <CheckOut />
    },
    
]

