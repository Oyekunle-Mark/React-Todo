import React from "react";

function Todo({ id, task, completed, toggleCompleted }) {
  const listStyle = {
    textDecoration: completed ? "line-through" : "inherit"
  };

  return (
    <li key={id} style={listStyle} onClick={() => toggleCompleted(id)}>
      {task}
    </li>
  );
}

export default Todo;
