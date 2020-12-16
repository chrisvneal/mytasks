import React, { Component } from "react";

class NewTaskForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <p>Enter new task</p>
        <input type="text" placeholder="wash dishes" name="task" />
        <button>Add Task</button>
      </form>
    );
  }
}

export default NewTaskForm;
