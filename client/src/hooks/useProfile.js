import { useAuth } from "../context/AuthContext";
import axios from "axios";

const useProfile = () => {
    const{ user } = useAuth();
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    const[userData, setUserData] = useState(null);

    const fetchUser=async()=>{
        setLoading(true);
        setError(false);

        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/users`,{userId: user.id});
            const{ data } = response;

            //Save users data into user state
            setUserData(data);

            setLoading(false);
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
            setLoading(false);
        }
    };
  
    return {fetchUser, loading, error, userData};
}

export default useProfile;
