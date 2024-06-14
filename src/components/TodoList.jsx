import React from 'react'

const TodoList = () => {
  return (
    <div>
        <label htmlFor="list-text">Input your list</label>
      <input type="text" id='list-text' placeholder='input your list item'/>
      <button>Add item</button>
    </div>
  )
}

export default TodoList
