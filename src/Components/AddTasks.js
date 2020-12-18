import React, { Component } from "react";
import Header from "./Header";
import serializeForm from "form-serialize";

class AddTasks extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const values = serializeForm(e.target, { hash: true });
    // values.key = 6;

    if (this.props.onAddTasks) {
      this.props.onAddTasks(values);
    }
  };
  render() {
    return (
      <div className="AddTasks">
        <Header />

        <div className="container">
          <h2>Add Tasks</h2>
          <form onSubmit={this.handleSubmit} className="addtask-form">
            <input type="text" name="name" />
            <button>Add Task</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTasks;
