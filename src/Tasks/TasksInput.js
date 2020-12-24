import React from 'react'
import './TasksInput.css' 

const TasksInput = ({ handleSubmit }) =>   {
  // const [input, setInput] = useState('')

  const handleChange = (e) => {   
    console.log( e.target.value)
  };
  
  return (
    <div className="input-container">
      <form className="flex-container"
            onSubmit={handleSubmit} >

          <div className="small-container-input">
            <input type="text" 
                  name="name"
                  placeholder="task name"
                  // value={taskName}
                  onChange={this.input}
            />
          </div>

          <div className="small-container-input">
            <textarea type="text"  
                  name="description" 
                  rows="5"
                  columns="30"
                  placeholder="Task description"
                  onChange={handleChange}
                  // value={taskDescription}
            />
          </div>

          <div className="small-container-input">
            <button className="button-submit-input"> Submit </button>
          </div>
      </form>
    </div>
  )
}

export default TasksInput