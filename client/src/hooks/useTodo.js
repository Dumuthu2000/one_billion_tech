import { useState } from "react";
import axios from "axios";

const useTodo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Use null instead of false for error state
  const [todoList, setTodoList] = useState([]);

  //Fetching TO-DO tasks that logged-in user
  const fetchTodoList = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching

    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/task/tasks`, {
        withCredentials: true,
      });

      const { data } = response;
      setTodoList(data.tasks); // Store the fetched tasks in todoList

      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setLoading(false);
    } 
  };

  //Create a new TO-DO task
  const addTodo=async(formData)=>{
    setLoading(true);
    setError(null); 

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/task/tasks`,
        formData, {
          withCredentials: true,
        }
      );

      const { data } = response;

      //Add new task to the existing list of tasks
      setTodoList((prevTodoList)=>{
        [...prevTodoList, data.data]
      });

      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  }

  return { loading, error, fetchTodoList, addTodo, todoList };
};

export default useTodo;
