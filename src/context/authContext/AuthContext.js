import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);

  const SignUp = async(data) => {

    try{
      setLoading(true)
      axios.post("http://localhost:8080/user/create",data).then((res)=>{
        const authToken = res.data.token;
        
        if(authToken){
          setToken(authToken);
          localStorage.setItem('token', authToken);
        }
        toast.success(res.data.message)
      }).catch((err)=>{
        console.log(err)
      })

    } catch (error) {
      console.error('An error occurred during login:', error);
      toast.error('An error occurred during login');
    } finally {
      setLoading(false);
    }

  }

  const loginHandler = async (value) => {
    const data = {
      username: value.email,
      password: value.password
    }

    setLoading(true);

    try {
      axios.post(
        'http://localhost:8080/user/login',
        data
      ).then((res)=>{
        const authToken = res.data.token;
        if(authToken){
          setToken(authToken);
          localStorage.setItem('token', authToken);
        }
        toast.success(res.data.message);
      }).catch((err)=>{
        if(!err.response.data.errors){
          toast.error(err.response.data.message)
        }else{

          if(err.response.data.errors.length > 1){
            toast.error("Email or Password Is required")
          }else{
            toast.error(err.response.data.errors[0].msg)
          }
          
        }
      })
    } catch (error) {
      console.error('An error occurred during login:', error);
      toast.error('An error occurred during login');
    } finally {
      setLoading(false);
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
        loading,
        logoutHandler,
        SignUp
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;