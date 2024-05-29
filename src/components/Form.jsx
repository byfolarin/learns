import React, { useState } from 'react'

const Form = ({text,setText,list,setList,setStatus}) => {

 
  const textChange = (e) =>{
    setText(e.target.value)
  }

  const upDateList = () =>{
    setList((allItems) => 
      {
      return[...allItems, 
      {text: text, 
      completed: false,
      id: Math.random() * 1000}]
    }
  )
    setText("");
  }

    const changeStatus = (e) => {
        setStatus(e.target.value)
    }

  return (
    <div>
      <form>
      <input onChange={textChange} type="text" value={text} className="todo-input" />

      <button onClick={upDateList} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">

        <select name="todos" onChange={changeStatus} className="filter-todo">
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
