import axios from 'axios';

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
        return response
    },
    (error)=>{
        if(error.response){
            if(error.response.status === 401){
                console.log(`Unauthorized! Redirecting to the login...`);
                window.location.href = '/login'
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;