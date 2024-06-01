import React from 'react'

const TodoItem = ({input,setInput,list,setList}) => {

const getInput = () =>{
    setInput((e) =>{
        e.target.value
    })
}

function addToList() {
    setList((allItems) => {
        return[...allItems, {text: input, completed: false, id: Math.random() * 1000}]
    })
    setInput("")
}

  return (
    <div className='sets-on'>
        <div className="container">
              <input type="text" onChange={getInput} value={input} className='form-input'/>
                <div onClick={addToList} className='add-to-list'> <i className='fas fa-plus'></i>
        </div>
        </div>


        <div className='select'>
                <select>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>

    </div>

    
  )
}

export default TodoItem
