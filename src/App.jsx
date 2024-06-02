import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList'





function App() {

  const [input,setInput] = useState("")
  const [status,setStatus] = useState("all")
  const [list,setList] = useState([])



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

            <TodoList />

      </div>
  );
}

export default App;
