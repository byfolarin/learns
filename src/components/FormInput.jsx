import React from 'react'

const FormInput= ({input,setInput,setStatus}) => {

const text = (e) =>{
    setInput(e.target.value)
}



const updatedSelect=(e)=>{
    setStatus (e.target.value)
}



  return (
    <div>


    <form>

      <input type="text" value={input} onChange={text} class="todo-input" />
      <button class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>


      <div class="select">
        <select name="todos" onChange={setStatus} class="filter-todo">
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
