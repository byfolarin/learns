import React, { useState } from 'react'
import Todo from './components/TodoList';

const Todo = ({input}) => {


  return (
    <div className='todo-container'>
      <div className='todo'>
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
