import React, { createContext, useEffect, useReducer, useState } from 'react';
import { useAuthContext } from '..';  
import { reducer } from '../../reducer';

export const CartContext = createContext();

// Assuming `cartReducer` and `intialState` are defined somewhere in your code
// You should import them and use them in the `useReducer` hook.

const CartContextProvider = ({ children }) => {
  const { token } = useAuthContext();  
  const [count, setCount] = useState(1);
  const stock = 10;

  const getLocalData = ()=>{
    let data = localStorage.getItem("Cart")
    if(data == []){
      return []
    }else{
      return JSON.parse(data)
    }
  }


  const initialstate = {
    Cart:getLocalData(),
    total_item:"",
    total_amount:'',
  }

  
  

  const [state,dispatch] = useReducer(reducer,initialstate)

  const addToCart = (item)=>{
    dispatch({type:"ADD_TO_CART" ,payload:{...item,productcount:count}})
  }

  const removeItem = (item)=>{
    dispatch({type:"REMOVE_ITEM",payload:item.id})
    window.location.reload()
  }

  const Increase = (item) => {
    if(count < stock){
      setCount(count + 1)
      dispatch({type:"ADD_TO_CART" ,payload:{...item,productcount:1}})
    }else{
      setCount(count)
    }
    
  };

  const Decrease = (item) => {
    if(count <= 1){
      dispatch({type:"REMOVE_ITEM",payload:item.id})
    }else{
      count >= 1 ? setCount(count - 1) : setCount(1)
      dispatch({type:"ADD_TO_CART" ,payload:{...item,productcount:-1}})
    }
  };

  useEffect(() => {
   localStorage.setItem("Cart",JSON.stringify(state.Cart))
  }, [state.Cart]);
  

  return (
    <CartContext.Provider
      value={{...state,
        Increase,Decrease,addToCart,removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
