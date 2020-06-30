import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      {props.selectedToDoItem.data}
      <button onClick={props.onClick}>Delete</button>
    </div>
  );
}

export default TodoItem;
