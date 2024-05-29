import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import ToDoItem from './components/TodoItem';
import { useState } from 'react';


function App() {

  const [list, setList] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [status, setStatus] = React.useState("all")
  const [filteredTodos, setFilteredTodos] = React.useState([])


  
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
          <h1>Todo List</h1>
        </header>
        <Form 

            input={input}
            setInput={setInput}
            list={list}
            setList={setList}
            setStatus={setStatus}/>

        <TodoList/>
        <ToDoItem/>
      </div>
  );
}

export default App;
