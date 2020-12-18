import "./styles.scss";
import { Component } from "react";
import CompletedTasks from "./Components/CompletedTasks";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import AddTasks from "./Components/AddTasks";

class App extends Component {
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

    completedTasks: [
      {
        name: "Fake completed tasks",
        key: 1,
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
  };
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => <Home tasks={this.state.tasks} />}
        />

        <Route
          path="/completed"
          render={() => <CompletedTasks tasks={this.state.completedTasks} />}
        />

        <Route
          path="/addtasks"
          render={({ history }) => (
            <AddTasks
              onAddTasks={(tasks) => {
                this.addTasks(tasks);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
