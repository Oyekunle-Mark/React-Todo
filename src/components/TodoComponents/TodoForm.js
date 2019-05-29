import React from "react";

export default function TodoForm({ inputValue, inputChange, addTodo }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter new todo"
        value={inputValue}
        onChange={inputChange}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button>Clear Todo</button>
    </form>
  );
}
