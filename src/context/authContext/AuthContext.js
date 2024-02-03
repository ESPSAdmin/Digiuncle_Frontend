import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [loggingIn, setLoggingIn] = useState(false);

  const loginHandler = async ({ email = "", password = "" }) => {
    setLoggingIn(true);
    
    try {
      const response = await axios.post(
        'https://digiuncle-backend-api.onrender.com/api/users/login',
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        const authToken = response.data.token;
        setToken(authToken);
        localStorage.setItem('token', authToken); // Store the token in local storage
        console.log('Login successful:', authToken);
        toast.success(response.data.message);
      } else {
        console.error('Login failed',);
        // toast.error(res);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      toast.error('An error occurred during login');
    } finally {
      setLoggingIn(false);
    }
  };
  
  const logoutHandler = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with logout
        localStorage.removeItem("token");
        setToken(null);
        window.location.href = '/login'; // Use '=' instead of '('
      }
    });
  };
  

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        token,
        loggingIn,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;