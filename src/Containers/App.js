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

  newTaskHandler (props) {
    const tasks = {...this.state };
    const newTask = tasks.push[{
        // id:{ Date.now() }, 
        taskName: props.name, 
        taskDescription:props.description, 
        isDone:false}]
    this.state({
      newTask
    })
  }

  render () {
    let tasksDisplay = (
      this.state.tasks.map((task, index) => {
        return (<TasksOutput
          key={index}
          name={task.taskName}
          description={task.taskDescription}
          isDone={task.isDone}
      />)
      })
    )

    return (
      <div className="App">
        <h1>Welcome to the task manager</h1>
        <h3>Please input your task</h3>
        { tasksDisplay }

        <TasksInput onSubmit={this.newTaskHandler} />
      </div>
    );
  }
}

export default App;
