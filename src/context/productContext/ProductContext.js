import React, {  createContext, useEffect } from 'react'
import { useReducer } from 'react'
import { reducer1 } from '../../reducer'

export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {

    const getData = ()=>{
        const data = localStorage.getItem("Recent")
        if(data == []){
            return []
        }else{
            return JSON.parse(data)
        }
    }

    const initialstate = {
        RecentProduct:getData() || [],
    }
    const [state,dispatch] = useReducer(reducer1,initialstate)

    const addRecentProduct = (item)=>{
        dispatch({type:"ADD_RECENT",payload:item})
    }

    useEffect(()=>{
        localStorage.setItem("Recent",JSON.stringify(state.RecentProduct))
        setTimeout(() => {
            localStorage.removeItem("Recent")
        }, 72*60*60*1000);
    },[state.RecentProduct])

    return (
        <ProductContext.Provider value={{
            ...state,addRecentProduct
        }} >
            {children}
        </ProductContext.Provider>
    )
}


export default ProductContextProvider;