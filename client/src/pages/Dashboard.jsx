// import React, { useEffect, useState } from 'react';
// import TodoItem from '../components/TodoItem';
// import TodoForm from '../components/TodoForm';
// import Modal from '../components/Model';
// import { Plus, Filter } from 'lucide-react';
// import useTodo from '../hooks/useTodo';

// const Dashboard = () => {
//   const { loading, error, fetchTodoList, addTodo, todoList } = useTodo();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentTodo, setCurrentTodo] = useState(null);

//   // Fetching created todo by logged-user
//   useEffect(() => {
//     fetchTodoList();
//   }, []);

//   // Modal opening
//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleEdit = (todo) => {
//     setCurrentTodo(todo); // Set the current task to be edited
//     setIsModalOpen(true); // Open the modal for editing
//   };

//   const handleSubmitForm = async (formData) => {
//     await addTodo(formData);
//     handleCloseModal();
//     await fetchTodoList(); // Fetch the updated todo list
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-8 relative">
//       <div className="mt-10 mx-auto max-w-[60rem] bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
//         {/* Header Section */}
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//           <h1 className="font-bold text-3xl text-gray-800">To-Do List</h1>
//           <div className="flex items-center gap-3">
//             <button
//               className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
//             >
//               <Filter className="h-4 w-4" />
//               Filter
//             </button>
//             <button
//               onClick={handleOpenModal}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//             >
//               <Plus className="h-4 w-4" />
//               Add Task
//             </button>
//           </div>
//         </div>
//         {/*Horizontal line*/}
//         <div className="flex items-center my-6">
//           <hr className="flex-grow border-t border-gray-300" />
//           <span className="mx-4 text-gray-500 font-semibold capitalize text-xl">Available tasks</span>
//           <hr className="flex-grow border-t border-gray-300" />
//         </div>
//         {/* Todo Items created Today */}
//         <div className="mt-6 space-y-4">
//           {loading ? (
//             <div className="text-center">Loading...</div>
//           ) : error ? (
//             <div className="text-center text-red-500">Error: {error}</div>
//           ) : (
//             todoList.map((task) => <TodoItem key={task.taskId} todo={task} onEdit={handleEdit}/>)
//           )}
//         </div>

//         {isModalOpen && (
//           <Modal onClose={handleCloseModal}>
//             <TodoForm
//               onClose={handleCloseModal}
//               handleSubmit={handleSubmitForm}
//               handleLoading={loading}
//               selectedTodo={currentTodo} // Pass the current todo data for editing
//             />
//           </Modal>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState, useCallback } from 'react';
import TodoItem from '../components/TodoItem';
import TodoForm from '../components/TodoForm';
import Model from '../components/Model';
import { Plus, Filter } from 'lucide-react';
import useTodo from '../hooks/useTodo';

const Dashboard = () => {
  const { loading, error, fetchTodoList, addTodo, todoList } = useTodo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    fetchTodoList();
  }, []);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentTodo(null);
  }, []);

  const handleEdit = useCallback((todo) => {
    setCurrentTodo(todo);
    setIsModalOpen(true);
  }, []);

  const handleSubmitForm = useCallback(
    async (formData) => {
      await addTodo(formData);
      handleCloseModal();
      await fetchTodoList();
    },
    [addTodo, handleCloseModal, fetchTodoList]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-8 relative">
      <div className="mt-10 mx-auto max-w-[60rem] bg-white border border-gray-100 rounded-xl p-8 shadow-lg backdrop-blur-sm bg-white/80">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="font-bold text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              To-Do List
            </h1>
            <p className="text-gray-500 text-sm">Manage your tasks efficiently</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 border border-gray-200">
              <Filter className="h-4 w-4" />
              Filter
            </button>
            <button
              onClick={handleOpenModal}
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Plus className="h-4 w-4" />
              Add Task
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <span className="mx-4 text-gray-500 font-medium text-lg">Available tasks</span>
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Todo Items */}
        <div className="mt-6 space-y-4">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto" />
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-500 bg-red-50 rounded-lg border border-red-100 p-4">
              Error: {error}
            </div>
          ) : todoList.length === 0 ? (
            <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-200">
              No tasks available. Create your first task!
            </div>
          ) : (
            todoList.map((task) => <TodoItem key={task.taskId} todo={task} onEdit={handleEdit} />)
          )}
        </div>

        {isModalOpen && (
          <Model onClose={handleCloseModal}>
            <TodoForm
              onClose={handleCloseModal}
              handleSubmit={handleSubmitForm}
              handleLoading={loading}
              selectedTodo={currentTodo}
            />
          </Model>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
