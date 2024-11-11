import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider=({children})=>{
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[user, setUser] = useState(null);

    const login=(userData)=>{
        setIsLoggedIn(true);
        setUser(userData); //Store user data globaly
    }

    const signup=(userData)=>{
        setIsLoggedIn(true);
        setUser(userData);
    }

    const logout=()=>{
        setIsLoggedIn(false);
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{isLoggedIn, login, signup, logout, user}}>
            {children}
        </AuthContext.Provider>
    )
}

//Create custom hook to accessing autcontext
export const useAuth=()=> useContext(AuthContext);
