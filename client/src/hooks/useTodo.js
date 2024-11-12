import { useState } from "react";
import axios from "axios";

const useTodo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  // Helper function to handle API errors
  const handleApiError = (error) => {
    setError(error.response?.data?.message || 'Something went wrong');
    setLoading(false);
  };

  // Fetch all to-do tasks for the logged-in user
  const fetchTodoList = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}/task/tasks`, {
        withCredentials: true,
      });
      setTodoList(response.data.tasks);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  // Create a new to-do task
  const addTodo = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}/task/tasks`, formData, {
        withCredentials: true,
      });
      setTodoList((prevTodoList) => [...prevTodoList, response.data.data]);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a specific to-do task by ID
  const fetchSelectedTask = async (taskId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}/task/tasks/${taskId}`, {
        withCredentials: true,
      });
      setSelectedTodo(response.data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete a to-do task by ID
  const deleteTask = async (taskId) => {
    setLoading(true);
    setError(null);

    try {
      await axios.delete(`${baseUrl}/task/tasks/${taskId}`, {
        withCredentials: true,
      });
      setTodoList((prevTodoList) => prevTodoList.filter((task) => task.id !== taskId));
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    todoList,
    selectedTodo,
    fetchTodoList,
    addTodo,
    fetchSelectedTask,
    deleteTask,
  };
};

export default useTodo;
