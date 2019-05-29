import React from "react";
import Todo from "./Todo";

export default function TodoList({ activities, changeCompleteStatus }) {
  return (
    <ul>
      {activities.map(activity => (
        <Todo
          key={activity.id}
          toggleCompleted={changeCompleteStatus}
          {...activity}
        />
      ))}
    </ul>
  );
}
