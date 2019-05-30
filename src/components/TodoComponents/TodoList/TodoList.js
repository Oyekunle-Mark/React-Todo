import React from "react";
import Todo from "../Todo/Todo";
import SearchBar from "../SearchBar/SearchBar";
import "./TodoList.css";

function TodoList({
  activities,
  changeCompleteStatus,
  searchCriteria,
  searchInputChange
}) {
  return (
    <div>
      <h2>Todos</h2>
      <SearchBar
        searchValue={searchCriteria}
        searchInputHandler={searchInputChange}
      />
      <ul>
        {/* eslint-disable-next-line */}
        {activities.map(activity => {
          if (activity.task.includes(searchCriteria)) {
            return (
              <Todo
                key={activity.id}
                toggleCompleted={changeCompleteStatus}
                {...activity}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default TodoList;
