import './styles.css'
import TaskList from './Components/TaskList'

const tasks=[{
  name: 'clean up',
  key: 1
},
{
name: 'wash dishes',
key: 2
}];
function App() {
  return (
    <div className="App">
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
