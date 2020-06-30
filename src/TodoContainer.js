import React from "react";
import "./App.css";
import AddNewItem from "./AddNewItem";
class TodoConatiner extends React.Component {
  render() {
    return (
      <div className="todo-container">
        <h1> Todo APP</h1>
        <AddNewItem />
      </div>
    );
  }
}

export default TodoConatiner;
