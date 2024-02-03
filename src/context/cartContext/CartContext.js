import React, { createContext, useReducer, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '..';  // Update this import based on your project structure
import { actionType } from '../../utils/actionType';  // Update this import based on your project structure
import toast from 'react-hot-toast';

export const CartContext = createContext();

// Assuming `cartReducer` and `intialState` are defined somewhere in your code
// You should import them and use them in the `useReducer` hook.

const CartContextProvider = ({ children }) => {
  const { token } = useAuthContext();  // Update this based on your project structure
  const [loadingCart, setLoadingCart] = useState(false);
  const [disableCart, setDisableCart] = useState(false);

  const deleteProductFromCart = async (id) => {
    setDisableCart(true);
    try {
      const response = await axios.delete(`http://localhost:3000/Cart/${id}`);
      if (response.status === 200 || response.status === 201) {
        toast.success("productre")
      }
    } catch (err) {
      console.log(err);
    } finally {
      setDisableCart(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        deleteProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
