import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const useLogin = () => {
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const { login } = useAuth();

    const handleLogin=async(email, password)=>{
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, {email, password});

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

    return { handleLogin, loading, error };
}
export default useLogin;
