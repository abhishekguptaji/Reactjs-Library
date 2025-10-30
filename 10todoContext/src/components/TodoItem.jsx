import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl border transition-all duration-300 shadow-md ${
        todo.completed
          ? 'bg-green-100 border-green-300'
          : 'bg-purple-100 border-purple-200 hover:shadow-lg'
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="w-5 h-5 accent-green-600 cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Todo Text */}
      <input
        type="text"
        className={`flex-1 mx-3 bg-transparent text-gray-800 font-medium text-base focus:outline-none rounded-lg transition-all duration-200 ${
          isTodoEditable
            ? 'border border-gray-300 px-2 bg-white'
            : 'border border-transparent'
        } ${todo.completed ? 'line-through text-gray-500' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit / Save Button */}
      <button
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
        className={`w-9 h-9 flex items-center justify-center rounded-lg border text-lg transition-all duration-200 ${
          todo.completed
            ? 'opacity-50 cursor-not-allowed'
            : 'bg-white hover:bg-gray-100 border-gray-300 shadow-sm'
        }`}
      >
        {isTodoEditable ? '💾' : '✏️'}
      </button>

      {/* Delete Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 text-lg bg-white hover:bg-red-100 hover:text-red-600 shadow-sm transition-all duration-200"
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
