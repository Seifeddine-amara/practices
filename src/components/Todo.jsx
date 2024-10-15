import React, { useState } from 'react';

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  function handleAddTodo() {
    if (todo.trim() !== "") {
      setTodoList([...todoList, todo]);
      setTodo('');
    }
  }

  function handleDelete(index) {
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">Todo List</h1>

      <div className="flex mb-4">
        <input 
          className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200" 
          placeholder="Add todo here" 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)}
        />
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md transition duration-200 transform hover:bg-blue-700 hover:scale-105" 
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      
      <ul className="space-y-2">
        {todoList.map((todo, index) => (
          <li 
            key={index} 
            className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-md transition duration-200 transform hover:scale-105"
          >
            <span className="text-gray-800">{todo}</span>
            <button 
              className="bg-red-500 text-white px-3 py-1 rounded-md transition duration-200 hover:bg-red-600 hover:scale-105" 
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
