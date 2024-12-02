import { useState } from 'react';
import axiosInstance from '../services/axiosInstance';

const useTodo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  //Fetching TO-DO tasks that logged-in user
  const fetchTodoList = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching

    try {
      const response = await axiosInstance.get(`/task/tasks`);

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
      const response = await axiosInstance.get(`/task/tasks/${taskId}`);
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
      const response = await axiosInstance.delete(`/task/tasks/${taskId}`);
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
