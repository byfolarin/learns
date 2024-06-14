import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';


function App() {

  const [input, setInput] = useState ("");
  const [list, setList] = useState([]);
  const [arr, setArr] = useState([])

  return (
    
      <div className="App">
        <TodoList input={input} setInput={setInput} list= {list} setList={setList}/>
        <TodoItem list= {list} setList={setList} arr = {arr} setArr ={setArr} />
      </div>
  );
}

export default App;
