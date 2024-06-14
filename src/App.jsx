import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {

  const [input, setInput] = useState ("")

  return (
    
      <div className="App">
        <TodoList input={input} setInput={setInput}/>
      </div>
  );
}

export default App;
