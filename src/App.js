import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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
  constructor(props) {
    super(props);

    this.state = {
      todos: activityList,
      newTodoInput: ""
    };
  }

  changeHandler = e => {
    this.setState({
      newTodoInput: e.target.value
    });
  };

  addNewTodo = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.newTodoInput,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: this.state.todos.concat(newTodo),
      newTodoInput: ""
    });
  };

  render() {
    return (
      <div>
        <TodoList activities={this.state.todos} />
        <TodoForm
          inputValue={this.state.newTodoInput}
          inputChange={this.changeHandler}
          addTodo={this.addNewTodo}
        />
      </div>
    );
  }
}

export default App;
