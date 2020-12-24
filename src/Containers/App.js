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

  handleChangeName (event){   
    return event.target.value;
  };

  handleChangeDescription (event){   
    return event.target.value;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const inputs = event.target.getElementsByTagName('input');
    console.log(inputs);
    const tasks = [...this.state.tasks ];
    const newTasksList = {
        id:Date.now(),
        taskName: inputs.name.value, 
        taskDescription: inputs.description.value, 
        isDone:false}
    tasks.push(newTasksList)
    this.setState({
      tasks
    })
    document.getElementById('input-1').value =""
    document.getElementById('input-2').value =""
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
                        id='input-1'
                        placeholder="input task name"
                        // onChange={this.handleChangeName}
                        // value={name}
                        required
                  />
                </div>

                <div className="small-container-input">
                  <input type="text"  
                        name="description" 
                        id='input-2'
                        placeholder="input task description"
                        // onChange={this.handleChangeDescription}
                        // value={description}
                        required
                  />
                </div>

                <div className="small-container-input">
                <input type="submit" value="Submit" />  
                  {/* <button 
                    className="button-submit-input"
                    onSubmit={this.handleSubmit}> 
                      Submit 
                  </button> */}
                </div>
            </form>
          </div>
        </Fragment>
      </div>
    );
  }
}

export default App;
