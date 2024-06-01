import React from 'react'

const TodoItem = () => {
  return (
    <div className='sets-on'>
        <div className="container">
              <input type="text" className='form-input' name="" id="" />
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
