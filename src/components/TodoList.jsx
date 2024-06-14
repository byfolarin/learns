import React from 'react'

const TodoList = ({input, setInput}) => {


    function handleChange (e){
        setInput(e.target.value)
    }



  return (
    <div>
        <label htmlFor="list-text">Input your list</label>
      <input type="text" value={input} id='list-text' placeholder='input your list item'/>
      <button>Add item</button>
    </div>
  )
 }

export default TodoList
