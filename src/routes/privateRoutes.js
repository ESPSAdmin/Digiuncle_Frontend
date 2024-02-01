import { SignIn,SignUp } from "../pages/indes";

export const PrivateRoute = [
    
    {
        path : '/signup',
        element : <SignUp/>,
    },
    {
        path : '/login',
        element : <SignIn/>,
    },
];

