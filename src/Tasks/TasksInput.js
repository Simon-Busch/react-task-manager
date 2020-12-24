import React from 'react'
import './TasksInput.css' 

const TasksInput = ({ name, description}) => {
  return (
    <div className="input-container">
      <div className="flex-container">
        <div className="small-container-input">
          <p>Task name</p>
          <input type="text"  value={name} />
        </div>
        <div className="small-container-input">
          <p>Task description</p>
          <textarea type="text"  value={description}/>
        </div>
      </div>
      <div className="small-container-input">
        <button className="button-submit-input"> Submit </button>
      </div>
    </div>
  )
}

export default TasksInput