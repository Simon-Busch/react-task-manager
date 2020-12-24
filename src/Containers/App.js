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

  handleChangeName (event){   
    return event.target.value;
  };

  handleChangeDescription (event){   
    return event.target.value;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const tasks = [...this.state.tasks ];
    const newTasksList = {
        id:4,
        taskName: event.target.value, 
        taskDescription: event.target.value, 
        isDone:false}
    tasks.push(newTasksList)
    this.setState({
      tasks
    })

    console.log('sent to paradise')
    
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
            <form className="flex-container" onSubmit={this.handleSubmit}>
                <div className="small-container-input">
                  <input type="text" 
                        name="name"
                        placeholder="input task name"
                        onChange={this.handleChangeName}
                        required
                  />
                </div>

                <div className="small-container-input">
                  <textarea type="text"  
                        name="description" 
                        rows="5"
                        columns="30"
                        placeholder="input task description"
                        onChange={this.handleChangeDescription}
                        required
                  />
                </div>

                <div className="small-container-input">
                  <button 
                    className="button-submit-input"
                    onSubmit={this.handleSubmit}> 
                      Submit 
                  </button>
                </div>
            </form>
          </div>
        </Fragment>
      </div>
    );
  }
}

export default App;
