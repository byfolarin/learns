import React from 'react'

const TodoItem = ({ input, setInput, list, setList, setStatus }) => {

const getInput = (e) =>{
    setInput(e.target.value)
}


const addToList = () => {
    if (input.trim() !== "") {
        setList((allItems) => {
            return [...allItems,
                 {   text: input,
                     completed: false,
                     id: Math.random() * 1000 }];
                 });
        setInput("");
    }
};


const changeStatus = (e) =>{
   setStatus(e.target.value)
}

  return (
    <div className='sets-on'>
        <div className="container">
              <input type="text" onChange={getInput} value={input} className='form-input'/>
                <div onClick={addToList} className='add-to-list'> <i className='fas fa-plus'></i>
        </div>
        </div>


        <div className='select' onChange={changeStatus}>

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
