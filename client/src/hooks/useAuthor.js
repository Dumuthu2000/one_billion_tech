import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const useAuthor = () => {
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const { login, signup, logout } = useAuth();

    //User login API
    const handleLogin=async(formData)=>{
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, 
                formData, {
                withCredentials: true, //To access automatically httpyOnly cookies
            });

            //Destructuring response data
            const{ data } = response;
            //Save user data in user state
            login(data);

            setLoading(false);
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
            setLoading(false);
        }
    }

    //User signup API
    const handleSignup=async(formData)=>{
        setLoading(true);
        setError(false);

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/register`, 
                formData, {
                    withCredentials: true, //To access automatically httpyOnly cookies
                });
            const { data } = response;
            //Store user data globally
            signup(data);

            setLoading(false);
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
            setLoading(false);
        }
    }

    //User logout API
    const handleLogout=async()=>{
        setLoading(true);
        setError(false);

        try {
             await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/logout`, {
                    withCredentials: true, //To access automatically httpyOnly cookies
                });
            //MAke logout user gloabaly
            logout();

            setLoading(false);
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
            setLoading(false);
        }
    }

    return { handleLogin, handleSignup, handleLogout, loading, error };
}
export default useAuthor;
