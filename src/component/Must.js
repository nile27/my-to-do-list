import React from "react";
import '../App.css'

export default function Must({item}){
  return(
  <li className = 'must'>
    <div className='work'><span>{item.todo}<br/></span></div>
    <div className='time'><span>{item.id}<br/></span></div>
  </li>
  )
}