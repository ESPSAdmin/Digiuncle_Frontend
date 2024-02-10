import React, { createContext, useEffect} from 'react'
import { useReducer } from 'react'
import { reducer2 } from '../../reducer'
import toast from 'react-hot-toast'
export const  WishlistContext = createContext()

const WishlistProvider = ({children}) => {

    const Getdata = ()=>{
        const data = localStorage.getItem("Wishlist")
        if(data == []){
            return []
        }else{
            return JSON.parse(data)
        } 
    }

    const initialstate = {
        Wishlist:Getdata()
    }
    const [state ,dispatch] = useReducer(reducer2,initialstate)
    const addToWishlist = (item)=>{
        dispatch({type:"ADD_TO_WISHLIST",payload:item})
        toast.success("Item Added to Wishlist")
    }
    const removeToWish = (item)=>{
        dispatch({type:"REMOVE_TO_WISHLIST",payload:item.id})
        toast.success("Item remove to Wishlist")
    }
    useEffect(()=>{
        localStorage.setItem("Wishlist",JSON.stringify(state.Wishlist))
    },[state.Wishlist])
  return (
    <WishlistContext.Provider value={{...state,addToWishlist,removeToWish}}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider