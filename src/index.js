import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider, CartContextProvider, ProductContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          </ProductContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
  </React.StrictMode >
);


