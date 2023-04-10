import React from "react";
import "../App.css"
import modalList from "./modalList";
function todolist( {item} ){

  return(
  <li className='todo' > 
      <div className='must-question'>
        <input type = "checkbox" className="must-checkbox"></input>
        <label for ="must-checkbox" className = "must-label"></label>
      </div>
      <div className='todo-box'>
        <div className='todotime'>
          {item.id}
        </div>
        <div className='todowork'>
          {item.todo} 
        </div>
      </div>
      <div className='secces'>
        <input type = 'checkbox' className="input-green" />
      </div>
    </li>
    )
}

export default todolist
