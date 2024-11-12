import { useState } from 'react';
import axios from 'axios';

const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState(null);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const fetchUser = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await axios.get(`${baseUrl}/user/users`, {
        withCredentials: true, //To access automatically httpyOnly cookies
      });
      const { data } = response;

      //Save users data into user state
      setUserData(data);

      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  //Change password API
  const changePasswordAPI = async (formData) => {
    setSuccess(false);
    setLoading(true);
    setError(false);

    try {
      await axios.patch(`${baseUrl}/user/change-password`, formData, {
        withCredentials: true, //To access automatically httpyOnly cookies
      });
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  return { fetchUser, changePasswordAPI, loading, error, success, userData };
};

export default useUser;
