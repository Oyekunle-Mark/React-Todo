import React from "react";
import TodoList from "./components/TodoComponents/TodoList";

const activityList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList activities={activityList} />
      </div>
    );
  }
}

export default App;
