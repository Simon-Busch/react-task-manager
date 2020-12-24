import './App.css';
import React, { Component, Fragment } from 'react'
import TasksInput from '../Tasks/TasksInput'
import TasksOutput from '../Tasks/TasksOutput'
import '../Tasks/TasksInput.css' 

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
    const newTasksList = tasks.push[{
        // id:{ Date.now() }, 
        taskName: props.name, 
        taskDescription:props.description, 
        isDone:false}]
    this.state({
      newTasksList
    })
  }

  handleChange = (e) => {   
    console.log( e.target.value)
  };

  handleSubmit = (e) => {
    console.log('coucou')
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

        {/* <TasksInput onSubmit={this.newTaskHandler} /> */}
        <Fragment>
          <div className="input-container">
            <form className="flex-container"
                  onSubmit={this.handleSubmit} >

                <div className="small-container-input">
                  <input type="text" 
                        name="name"
                        placeholder="input task name"
                        onChange={this.handleChange}
                  />
                </div>

                <div className="small-container-input">
                  <textarea type="text"  
                        name="description" 
                        rows="5"
                        columns="30"
                        placeholder="input task description"
                        onChange={this.handleChange}
                  />
                </div>

                <div className="small-container-input">
                  <button className="button-submit-input"> Submit </button>
                </div>
            </form>
          </div>
        </Fragment>
      </div>
    );
  }
}

export default App;
