import React from "react";

function TodoForm({ inputValue, inputChange, addTodo }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter new todo"
        value={inputValue}
        onChange={inputChange}
      />
      <button type="submit" onClick={addTodo}>
        Add Todo
      </button>
      <button>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
