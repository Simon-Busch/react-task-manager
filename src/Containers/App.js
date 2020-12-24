import './App.css';
import React, { Component } from 'react'
import TasksInput from '../Tasks/TasksInput'
import TasksOutput from '../Tasks/TasksOutput'

class App extends Component {
  state={
    task1: {
      taskName:'Laundry',
      taskDescription: 'wash clothes carefuly',
      isDone: true
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
        <TasksOutput
          name={this.state.task1.taskName}
          description={this.state.task1.taskDescription}
          submit={this.newTaskHandler}
          isDone={this.state.task1.isDone}
        />
        <TasksInput />
      </div>
    );
  }
}

export default App;
