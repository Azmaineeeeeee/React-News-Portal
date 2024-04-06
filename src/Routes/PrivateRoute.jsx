import { useContext  } from "react";
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../Providers/AuthProvider";
import {Navigate} from "react-router-dom"



const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    let location = useLocation();
    

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to = '/login'></Navigate>
    );
};

export default PrivateRoute;
