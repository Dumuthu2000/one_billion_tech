import { useState } from "react";
import axios from "axios";

const useTodo = () => {
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(false);
  const[todoList, setTodoList] = useState([]);

  const fetchTodoList=async()=>{
    setLoading(true);
    setError(false);

    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/task/tasks`,{
            withCredentials: true,
        });

        const{ data } = response;
        //Save users data into user state
        setTodoList(data.tasks);
        console.log(data.tasks);
    } catch (error) {
        setError(error.response?.data?.message || 'Something went wrong');
        setLoading(false);
    }
  };

  return{ loading, error, fetchTodoList, todoList }
}

export default useTodo;
