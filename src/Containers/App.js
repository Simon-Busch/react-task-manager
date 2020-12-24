import './App.css';
import React, { Component } from 'react'
import TasksInput from '../Tasks/TasksInput'

class App extends Component {
  state={
    task1: {
      taskName:'Laundry',
      taskDescription: 'wash clothes carefuly',
      isDone: false
    },
    task2: {
      taskName:'Shopping',
      taskDescription: 'Buy christmas presents',
      isDone: false
    },
    task3: {
      taskName:'Code',
      taskDescription: 'Learn react',
      isDone: false
    }
  }

  newTaskHandler () {
    this.state({
      
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Welcome to the task manager</h1>
        <h3>Please input your task</h3>
        <TasksInput 
          name={this.state.task1.taskName}
          description={this.state.task1.taskDescription}
          submit={this.newTaskHandler}
        />
      </div>
    );
  }
}

export default App;
