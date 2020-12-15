import "./styles.css";
import TaskList from "./Components/TaskList";
import OldTasks from "./Components/OldTasks";
import { Route } from "react-router-dom";

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
      <Route exact path="/" render={() => <TaskList tasks={tasks} />} />

      <Route path="/oldtasks" component={OldTasks} />
    </div>
  );
}

export default App;
