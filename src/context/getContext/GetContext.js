import axios from "axios";
import React, { createContext, useState } from "react";

export const GetContext = createContext()


const GetContestProvider = ({ children }) => {
    const [data, SetData] = useState([])
    const RegisterDetail = (token) => {
       
        axios.get("http://localhost:8080/user/get",{
            headers:{
                "Authorization":token
            }
        }).then((res) => {
            SetData(res.data.result)
        }).catch((err) => {
            return err
        })
    }
    return (
        <GetContext.Provider value={{
            RegisterDetail, data
        }} >
            {children}
        </GetContext.Provider>
    )
}

export default GetContestProvider