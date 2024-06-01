import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';




function App() {

  const [input, setInput] = useState("");
  const [list, setList] = useState("");
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([])

 
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

        <TodoList 
         list = {list}
         setList = {setList}
         filteredTodos = {filteredTodos}
         />
      </div>
  );
}

export default App;
