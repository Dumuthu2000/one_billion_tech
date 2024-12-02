import { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../services/axiosInstance';

const useTodo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  // const baseUrl = import.meta.env.VITE_BASE_URL;

  //Fetching TO-DO tasks that logged-in user
  const fetchTodoList = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching

    try {
      const response = await axiosInstance.get(`/task/tasks`);
      // const response = await axios.get(`${baseUrl}/task/tasks`, {
      //   withCredentials: true,
      // });

      const { data } = response;
      setTodoList(data.tasks); // Store the fetched tasks in todoList

      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  //Create a new TO-DO task
  const addTodo = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post(`/task/tasks`, formData);
      // const response = await axios.post(`${baseUrl}/task/tasks`, formData, {
      //   withCredentials: true,
      // });

      const { data } = response;

      //Add new task to the existing list of tasks
      setTodoList((prevTodoList) => {
        [...prevTodoList, data.data];
      });

      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  //Fetch selected task
  const fetchSelectedTask = async (taskId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`/task/tasks/${taskId}`);
      // const response = await axios.get(`${baseUrl}/task/tasks/${taskId}`, {
      //   withCredentials: true,
      // });
      const { data } = response;
      setSelectedTodo(data);
      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  //Update a task
  const updateTask = async (taskId, formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.patch(`/task/tasks/${taskId}`, formData);
      // const response = await axios.patch(
      //   `${baseUrl}/task/tasks/${taskId}`,
      //   formData,
      //   {
      //     withCredentials: true,
      //   }
      // );
      if (response.status) {
        await fetchTodoList();
      }
      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  //Delete a  task
  const deletTask = async (taskId) => {
    setLoading(true);
    setError(null);

    try {
      // const response = await axios.delete(`/task/tasks/${taskId}`);
      const response = await axios.delete(`${baseUrl}/task/tasks/${taskId}`, {
        withCredentials: true,
      });
      if (response.status) {
        await fetchTodoList();
      }
      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    fetchTodoList,
    addTodo,
    fetchSelectedTask,
    updateTask,
    deletTask,
    todoList,
    selectedTodo,
  };
};

export default useTodo;
