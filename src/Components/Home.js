import React, { Component } from "react";
import AddTasks from "./AddTasks";
import TaskList from "./TaskList";
import Header from "./Header";

class Home extends Component {
  state = {
    tasks: [
      {
        name: "clean up",
        key: 1,
      },
      {
        name: "wash dishes",
        key: 2,
      },
    ],
  };
  addTasks = (tasks) => {
    // check all keys in each object of the array
    const taskKeys = [];
    this.state.tasks.forEach((task) => {
      taskKeys.push(task.key);
    });

    // increase highest key number by 1
    let highestKey = Math.max(...taskKeys);
    highestKey++;

    // add that number to the current key of the current task
    tasks.key = highestKey;

    this.setState((currentState) => ({
      tasks: currentState.tasks.concat([tasks]),
    }));

    // document.querySelector(".addtask-form").value = " ";
    console.log(document.querySelector(".addtask-form").value);
  };

  render() {
    return (
      <div className="Home">
        <Header />

        <div className="container">
          <AddTasks
            onAddTasks={(tasks) => {
              this.addTasks(tasks);
              // history.push("/");
            }}
          />

          <h2>New Tasks</h2>
          <TaskList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default Home;
