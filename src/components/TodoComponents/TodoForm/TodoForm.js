import React from "react";
import "./TodoForm.css";

function TodoForm({ inputValue, inputChange, addTodo, clearCompletedTask }) {
  return (
    <form>
      <input
        type="text"
        placeholder="...enter new todo"
        value={inputValue}
        onChange={inputChange}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearCompletedTask}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
