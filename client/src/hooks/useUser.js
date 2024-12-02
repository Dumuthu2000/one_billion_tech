import { useState } from 'react';
import axiosInstance from '../services/axiosInstance';

const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await axiosInstance.get(`/user/users`);
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
      await axiosInstance.patch(`/user/change-password`, formData);
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
