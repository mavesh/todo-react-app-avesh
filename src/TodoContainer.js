import React from "react";
import "./App.css";
import AddDetails from "./AddDetails";
class TodoConatiner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="todo-container">
          <h1> Todo APP</h1>
          <AddDetails />
        </div>
      </React.Fragment>
    );
  }
}

export default TodoConatiner;
