import React from 'react'

const TodoList = ({input, setInput, list, setList, arr, setArr}) => {


    function handleChange (e){
        setInput(e.target.value)
    }

    function handleList (){
        setList(prev =>[...prev, input]);
        setInput('')
        setArr(list.map(i =>{
            <span>i</span>
        }))

        console.log(arr)
    }

    // function mapList (){
       
    // }

  



  return (
    <div>
        <label htmlFor="list-text">Input your list</label>
      <input type="text" value={input} onChange={handleChange} id='list-text' placeholder='input your list item'/>
      <button onClick={handleList}>Add item</button>

      <p>{arr}</p>

    </div>

    

  )
 }

export default TodoList
