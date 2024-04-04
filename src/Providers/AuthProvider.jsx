import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

// Creating an user
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    
    const createUser = (email,password) => {
        createUserWithEmailAndPassword(auth,email,password)
        return
    }
// Keeping track of the users
useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
        console.log('User Changed',currentUser);
        setUser(currentUser)
    })
    return () => {
        unSubscribe()
    }
},[])

// Sign In
const signInUser = (email,password) => {
 signInWithEmailAndPassword(auth,email,password)
 return
}

// SignOut
const logOut = () => {
    signOut(auth)
    return
}

    const authInfo = {user,createUser,logOut,signInUser}
    return (
        
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
        
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired 
}

export default AuthProvider;