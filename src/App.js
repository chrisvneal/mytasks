import "./styles.scss";
import { Component } from "react";
import CompletedTasks from "./Components/CompletedTasks";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import AddTasks from "./Components/AddTasks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />

        <Route path="/completed" component={CompletedTasks} />

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
