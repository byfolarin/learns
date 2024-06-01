import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';




function App() {

  const [input, setInput] = useState("");
  const [list, setList] = useState("");
  const [status, setStatus] = useState("");

 
  return (
      <div className="App">
        <TodoItem 
        input = {input} 
        setInput ={setInput}
        list = {list}
        setList = {setList}
        status = {status}
        setStatus = {setStatus}
        />
      </div>
  );
}

export default App;
