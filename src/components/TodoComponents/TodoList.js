import React from "react";
import Todo from "./Todo";

export default function TodoList({ activities }) {
  return (
    <ul>
      {activities.map(activity => (
        <Todo key={activity.id} {...activity} />
      ))}
    </ul>
  );
}
