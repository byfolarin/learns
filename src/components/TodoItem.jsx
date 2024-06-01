import React from 'react'

const TodoItem = ({input,setInput}) => {

const getInput = () =>{
    setInput((e) =>{
        e.target.value
    })
}

  return (
    <div className='sets-on'>
        <div className="container">
              <input type="text" onChange={getInput} className='form-input' name="" id="" />
                <div className='add-to-list'> <i className='fas fa-plus'></i>
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
