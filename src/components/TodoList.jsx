import React from 'react'

const TodoList = ({input, setInput, list, setList, arr, setArr}) => {


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

      <p>{arr.map(i =>(
        <li>{i}</li>
      ))}</p>

    </div>

    

  )
 }

export default TodoList
