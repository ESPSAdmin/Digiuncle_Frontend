import React, { createContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '..';  // Update this import based on your project structure
import { actionType } from '../../utils/actionType';  // Update this import based on your project structure
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { removeitem } from '../../Redux/Slices/CartSlice';

export const CartContext = createContext();

// Assuming `cartReducer` and `intialState` are defined somewhere in your code
// You should import them and use them in the `useReducer` hook.

const CartContextProvider = ({ children }) => {
  const dispatch = useDispatch()
  const { token } = useAuthContext();  
  const [count, setCount] = useState(1);

  const Increase = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      localStorage.setItem("quantity", newCount);
      return newCount;
    });
  };

  const Decrease = (item) => {
    if(count <= 1){
      dispatch(removeitem(item))
    }else{
      setCount(prevCount => {
        const newCount = prevCount - 1;
        localStorage.setItem("quantity", newCount);
        return newCount;
      });
    }
    
    
  };

  useEffect(() => {
    const storedCount = localStorage.getItem("quantity");
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }
  }, []);
  

  return (
    <CartContext.Provider
      value={{
        Increase,Decrease
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
