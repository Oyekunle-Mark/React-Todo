import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

export default function TodoList({ activities, changeCompleteStatus }) {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {activities.map(activity => (
          <Todo
            key={activity.id}
            toggleCompleted={changeCompleteStatus}
            {...activity}
          />
        ))}
      </ul>
    </div>
  );
}
