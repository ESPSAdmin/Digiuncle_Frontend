import {configureStore} from "@reduxjs/toolkit"
import cartreducer from "../Slices/CartSlice"
import Cartlocalstorage from "../Middleware/CartLocalStorage"
export const store = configureStore({
    reducer:{
        cart:cartreducer,
        
    },
    middleware :(getDefaultMiddleware)=>
    [...getDefaultMiddleware(), Cartlocalstorage]
  

   
})