import React, { Fragment } from 'react'

const TasksInput = ({ name, description}) => {
  return (
    <div> 
      <p>Task name</p>
      <input type="text"  value={name}/>
      <p>Task description</p>
      <textarea type="text"  value={description}/>
      <button> Submit </button>
    </div>
  )
}

export default TasksInput