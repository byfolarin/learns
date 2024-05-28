import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Thermostat from './components/Thermostat';
import Traffic from './components/Traffic';
import ToDoItem from './components/TodoItem';


function App() {

  const [inputText, setInputText] = useState('');
 
  return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <Form setInputText ={setInputText} inputText={inputText}/>
        <TodoList/>
        <Thermostat/>
        <Traffic/>
        <ToDoItem/>
      </div>
  );
}

export default App;
