import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import ToDoItem from './components/TodoItem';
import { useState } from 'react';


function App() {

  const [list, setList] = useState([]);

 
  return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <Form list={list} setList={setList}/>
        <TodoList/>
        <ToDoItem/>
      </div>
  );
}

export default App;
