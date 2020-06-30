import React from "react";
import TodoItem from "./TodoItem";

class AddNewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: [
        { data: "find details below", id: 1 },
        { data: "show all the information", id: 2 },
        { data: "show product details", id: 3 },
      ],
      inputValue: "",
    };
  }

  deleteTodoItem(selectedTodoItemId) {
    const index = this.state.userDetails.findIndex(
      (todoItem) => todoItem.id === selectedTodoItemId
    );
    this.state.userDetails.splice(index, 1); // remove the selected id item
    this.setState({ userDetails: this.state.userDetails, inputValue: "" });
  }

  addTodoItem() {
    this.state.userDetails.push({
      data: this.state.inputValue,
      id: Math.random(),
    });
    this.setState({
      userDetails: this.state.userDetails,
      inputValue: "",
    });
  }

  changeInputValue = (event) => {
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value,
    });
  };

  /**
   * componentDidMount method executed after react component render into the DOM
   */
  componentDidMount() {
    this.nameInput.focus(); // react syntax to provide focus on an input box
  }

  render() {
    // disabled Add Item button untill the user enter the input value
    const enterInput = this.state.inputValue.replace(/^\s+/g, "");
    const blnIsValid = enterInput && enterInput.length ? true : false;
    return (
      <div className="todoItem-list">
        <input
          type="text"
          placeholder="add item..."
          value={this.state.inputValue}
          onChange={this.changeInputValue}
          ref={(input) => {
            this.nameInput = input;
          }}
        />
        <button
          onClick={() => this.addTodoItem()}
          disabled={!blnIsValid}
          className={blnIsValid ? "isEnable" : ""}
        >
          Add Item
        </button>
        {this.state.userDetails.map((dataItem) => {
          return (
            <TodoItem
              selectedToDoItem={dataItem}
              key={dataItem.id}
              onClick={() => this.deleteTodoItem(dataItem.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default AddNewItem;
