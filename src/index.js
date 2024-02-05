import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider, CartContextProvider } from './context';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>

      <BrowserRouter>
        <Provider store={store}>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </Provider>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);


