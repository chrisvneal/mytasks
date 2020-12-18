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
        key: 1,
        name: "Fake completed tasks",
      },
    ],
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

        <Route path="/addtasks" component={AddTasks} />
      </div>
    );
  }
}

export default App;
