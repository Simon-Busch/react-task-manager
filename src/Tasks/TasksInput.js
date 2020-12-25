import React, { Fragment } from 'react'
import './TasksInput.css' 

const TasksInput = ({ click }) => {
  
  return (
    <Fragment>
      <div className="input-container">
        <form className="flex-container" onSubmit={click}>
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
              <input type="submit" value="Submit" id="submit-form-button"/>  
            </div>
        </form>
      </div>
    </Fragment>
  )
}
export default TasksInput