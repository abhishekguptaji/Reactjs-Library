import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo({ todo: todo, complete: false });
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex items-center w-full max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-green-400 transition-all duration-300"
    >
      {/* Input Field */}
      <input
        type="text"
        placeholder="Write a new task..."
        className="flex-1 px-4 py-2 text-gray-800 text-base bg-transparent outline-none placeholder:text-gray-400"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      {/* Add Button */}
      <button
        type="submit"
        className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-200"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
