import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';



function App() {

  const [input, setInput] = useState ("");
  const [list, setList] = useState([]);
  const [arr, setArr] = useState([])


  return (
    
      <div className="App">
        <TodoList input={input}
                    setInput={setInput} 
                    list= {list}
                    setList={setList}
                    arr = {arr}
                    setArr ={setArr}
        />


        <TodoItem/>
      </div>
  );
}

export default App;
