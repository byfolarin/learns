import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';
import Todo from './components/Todo';


function App() {

  const [input,setInput] = useState("")
  const [status,setStatus] = useState("all")
  const [list,setList] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])


  function filterHandler(){
    switch(status){
      case 'completed':
        setFilteredTodos(list.filter((todo) => todo.completed === true))
        break;

      case 'uncompleted':
        setFilteredTodos(list.filter((todo) => todo.completed === false))
        break;

      default:
        setFilteredTodos(list)
        break;
    }
  }



  return (
    
      <div className="App">
            <header>
              <h1>Fola's To-Do list</h1>
            </header>

            <FormInput 
            input = {input}
            setInput={setInput}
            status={status}
            setStatus={setStatus}
            list = {list}
            setList={setList}
            />


    <Todo input = {input} />

      </div>
  );
}

export default App;
