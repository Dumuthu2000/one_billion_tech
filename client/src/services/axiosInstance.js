import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
});

//Create Request interceptor
axiosInstance.interceptors.request.use(
    (config)=>{
        console.log(`Request send with: `,config);
        return config;
    },
    (error)=>{
        Promise.reject(error);
    }
);

//Create Response interceptor
axiosInstance.interceptors.response.use(
    (response)=>{
        response
    },
    (error)=>{
        if(error.response){
            if(error.response.status === 401){
                console.log(`Unauthorized! Redirecting to the login...`);
                navigate(`/login`);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;