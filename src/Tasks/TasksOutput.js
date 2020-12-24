import React, { Fragment } from 'react'

const TasksOutput = ({ name, description, isDone }) => {
  return (
    <div> 
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{isDone ? "Done" : "Not done yet"}</span>
    </div>
  )
}

export default TasksOutput