import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const[user, setUser] = useState(null);

    const login=async(email, password)=>{
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, {email, password});

            //Destructuring response data
            const{ data } = response;
            //Save user data in user state
            setUser(data);

            setLoading(false);
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
            setLoading(false);
        }
    }

    return { login, loading, error, user };
}
export default useLogin;
