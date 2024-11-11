import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider=({children})=>{
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[user, setUser] = useState(null);

    const login=(userData)=>{
        setIsLoggedIn(true);
        setUser(userData); //Store user data globaly
    }

    const logout=()=>{
        setIsLoggedIn(false);
    }

    return(
        <AuthContext.Provider value={{isLoggedIn, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    )
}

//Create custom hook to accessing autcontext
export const useAuth=()=> useContext(AuthContext);
