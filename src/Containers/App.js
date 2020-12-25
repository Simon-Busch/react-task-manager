import './App.css';
import React, { Component, Fragment } from 'react'
// import TasksInput from '../Tasks/TasksInput'
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

  handleSubmit = (event) => {
    event.preventDefault();
    //select inputs
    const input1 = document.getElementById('input-1');
    const input2 = document.getElementById('input-2');
    //select state
    const tasks = [...this.state.tasks ];
    //set new task
    const newTasksList = {
        id:Date.now(),
        taskName: input1.value, 
        taskDescription: input2.value, 
        isDone:false}
    tasks.push(newTasksList)
    this.setState({
      tasks
    })
    //reset fields
    input1.value =""
    input2.value =""
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

        <Fragment>
          <div className="input-container">
            <form className="flex-container" onSubmit={this.handleSubmit}>
                <div className="small-container-input">
                  <input type="text" 
                        name="name"
                        id='input-1'
                        placeholder="input task name"
                        required
                  />

                  <input type="text"  
                        name="description" 
                        id='input-2'
                        placeholder="input task description"
                        required
                  />
                </div>
                <div className="small-container-input">
                  
                </div>
                <div className="small-container-input">
                  <input type="submit" value="Submit" id="submit-form-button"/>  
                </div>
            </form>
          </div>
        </Fragment>
      </div>
    );
  }
}

export default App;
