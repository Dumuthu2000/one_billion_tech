import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const useSignup = () => {
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    const { signup } = useAuth();

    const handleSignup=async(formData)=>{
        setLoading(true);
        setError(false);

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/register`, formData);
            const { data } = response;
            //Store user data globally
            signup(data);

            setLoading(false);
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
            setLoading(false);
        }
    }
    
    return { handleSignup, loading, error };
}

export default useSignup;
