import React from "react";
import "./App.css"
export default  function todolist( {item} ){

  
  return(
  <li className='todo'> 
  {console.log(item)}
      <div className='must-question'>
        <input type = "checkbox" className="must-checkbox"></input>
        <label for ="must-checkbox" className = "must-label"></label>
      </div>
      <div className='todo-box'>
        <div className='todotime'>
          {item.start}
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