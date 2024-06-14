import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {

  const [input, setInput] = useState ("");
  const [list, setList] = useState([]);

  return (
    
      <div className="App">
        <TodoList input={input} setInput={setInput} list= {list} setList={setList}/>
      </div>
  );
}

export default App;
