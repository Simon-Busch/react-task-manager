import React from 'react'
import './TasksOutput.css' 

const TasksOutput = ({ name, description, isDone }) => {
  return (
    <div className="container-output"> 
      <h3>{name}</h3>
      <p> 👉  {description}</p>
      <span>{isDone ? " ✅ Done" : " ❌ Not done yet"}</span>
    </div>
  )
}

export default TasksOutput