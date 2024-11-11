import { useState } from "react";
import axios from "axios";

const useTodo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Use null instead of false for error state
  const [todoList, setTodoList] = useState([]);

  const fetchTodoList = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching

    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/task/tasks`, {
        withCredentials: true,
      });

      const { data } = response;
      setTodoList(data.tasks); // Store the fetched tasks in todoList
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setLoading(false);
    } 
  };

  return { loading, error, fetchTodoList, todoList };
};

export default useTodo;
