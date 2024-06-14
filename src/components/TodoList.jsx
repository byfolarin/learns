import React from 'react'

const TodoList = ({input, setInput, list, setList}) => {


    function handleChange (e){
        setInput(e.target.value)
    }

    function handleList (){
        setList(prev =>[...prev, input]);
        setInput('')
    }



  return (
    <div>
        <label htmlFor="list-text">Input your list</label>
      <input type="text" value={input} onChange={handleChange} id='list-text' placeholder='input your list item'/>
      <button onClick={handleList}>Add item</button>



      <li>{list}</li>

    </div>

    

  )
 }

export default TodoList
