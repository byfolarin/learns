import React from 'react'

export default function Todo({text, task, setList }) {


  return (
    <div>
       <div className='task-body'>
            <li className={`task-to-do ${task.completed ? 'line-throught' : ''}`}>
                {text}
            </li>
            <div className='check' onClick={completeHandler}>
                <i className='fas fa-check'></i>
            </div>
            <div className='trash' onClick={deleteHandler}>
                <i className='fas fa-trash'></i>
            </div>
       </div>
    </div>
  )
}
