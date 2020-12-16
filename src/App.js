import "./styles.css";
import OldTasks from "./Components/OldTasks";
import { Route } from "react-router-dom";
import Home from "./Components/Home";

const tasks = [
  {
    name: "clean up",
    key: 1,
  },
  {
    name: "wash dishes",
    key: 2,
  },
];
function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Home tasks={tasks} />} />

      <Route path="/oldtasks" component={OldTasks} />
    </div>
  );
}

export default App;
