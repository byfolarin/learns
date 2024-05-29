import React, { useState } from 'react'

const Form = ({list,setList}) => {

  const [text, setText] = useState("");

  const textChange = (e) =>{
    setText(e.target.value)
  }

  const newUpdate = () =>{
    setList((prevList) => [...prevList, text]);
    setText("");
  }


  return (
    <div>
      <form>
      <input onChange={text} type="text" className="todo-input" />

      <button onClick={newUpdate} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">

        <select name="todos" className="filter-todo">

          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>

        </select>
      </div>
    </form>
    </div>
  )
}

export default Form
