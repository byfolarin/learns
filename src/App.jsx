import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';




function App() {

  const [input, setInput] = useState("");

 
  return (
      <div className="App">
        <TodoItem 
        input = {input} 
        setInput ={setInput}
        />
      </div>
  );
}

export default App;
