import React, { useState } from 'react'

const Todo = ({input}) => {


  return (
    <div>
      <div className='task-body'>
            <li className='task-to-do'>
                {input}
            </li>
            <div className='check'>
                <i className='fas fa-check'></i>
            </div>
            <div className='trash'>
                <i className='fas fa-trash'></i>
            </div>
       </div>
    </div>
  )
}

export default Todo
