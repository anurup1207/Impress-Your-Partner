import React from 'react'
import './Main.css'

function Main(props) {
  return (
    
    <div className='main'>
        <img src={props.image} height="246" width="320" alt="one" />
    
    <h1 >{props.headingText}</h1>
    <p>{props.smallText}</p>
    <div className="buttons">
        <button className='yes' onClick={props.ClickYes}>YES</button>
        <button className='no' onClick={props.ClickNo}>NO</button>
    </div>
    </div>
    
  )
}

export default Main
