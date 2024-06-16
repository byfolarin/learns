import React from 'react'
import { useState } from 'react';

const TodoList = () => {


    const [input, setInput] = useState ("");
    const [list, setList] = useState([]);
    const [arr, setArr] = useState([])
  


    function handleChange (e){
        setInput(e.target.value)
    }

    function handleList (){
        setList(prev =>[...prev, input])
        setArr([...list])
        setInput('')
    }


  return (
    <div>
        <label htmlFor="list-text">Input your list</label>
      <input type="text" value={input} onChange={handleChange} id='list-text' placeholder='input your list item'/>
      <button onClick={handleList}>Add item</button>

      <p>{arr.map(i =>(<li>{i}</li>))}</p>

    </div>

    

  )
 }

export default TodoList
