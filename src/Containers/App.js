import './App.css';
import React, { Component } from 'react'
import TasksInput from '../Tasks/TasksInput'
import TasksOutput from '../Tasks/TasksOutput'

class App extends Component {
  state={

    tasks: [
      {
        id: 1,
        taskName:'Laundry',
        taskDescription: 'wash clothes carefuly',
        isDone: true
      },
      {
        id:2,
        taskName:'Shopping',
        taskDescription: 'Buy christmas presents',
        isDone: false
      },
      {
        id:3,
        taskName:'Code',
        taskDescription: 'Learn react',
        isDone: false
      }
    ]
  }

  newTaskHandler () {
    const tasks = {...this.state };
    const newTask = tasks.push[{id:4, taskName:'build future', taskDescription:'code for that bro', isDone:false}]
    this.state({
      newTask
    })
  }



  render () {
    let tasksDisplay = (
      this.state.tasks.map((task, index) => {
        return (<TasksOutput
        name={task.taskName}
        description={task.taskDescription}
        submit={this.newTaskHandler}
        isDone={task.isDone}
      />)
      })
    )

    return (
      <div className="App">
        <h1>Welcome to the task manager</h1>
        <h3>Please input your task</h3>
        { tasksDisplay }
        <TasksInput />
      </div>
    );
  }
}

export default App;
