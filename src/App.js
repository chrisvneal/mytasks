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
