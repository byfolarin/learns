import React from 'react'

const FormInput= ({input,setInput,setStatus,setList}) => {

const inputText = (e) =>{
    setInput(e.target.value)
}


const addList = () =>
{
   setList((i) =>{ return [...i,
    {text: input, 
    completed: false, 
    id: Math.random() * 1000}
]})
   setInput("")
}


const updatedSelect=(e)=>{
    setStatus (e.target.value)
}


  return (
    <div>
    <form>

      <input type="text" value={input} onChange={inputText} class="todo-input" />
      <button class="todo-button" onClick={addList} type="submit">
        <i class="fas fa-plus-square"></i>
      </button>


      <div class="select">
        <select name="todos" onChange={updatedSelect} class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </div>

  )
}

export default FormInput
