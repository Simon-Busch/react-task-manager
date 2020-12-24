import './App.css';
import TasksInput from '../Tasks/TasksInput'

function App() {
  return (
    <div className="App">
      <h1>Welcome to the task manager</h1>
      <h3>Please input your task</h3>
      <TasksInput />
    </div>
  );
}

export default App;
