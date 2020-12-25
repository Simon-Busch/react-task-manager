import React from 'react'
import './TasksOutput.css' 

const TasksOutput = ({ name, description, isDone, click }) => {
  return (
    <div className="container-output">
      <div>
        <span className="icon-delete" onClick={click}>X</span>
      </div>
      <div>
        <h3>{name}</h3>
        <p> 👉  {description}</p>
        <span>{isDone ? " ✅ Done" : " ❌ Not done yet"}</span>
      </div>
    </div>
  )
}

export default TasksOutput