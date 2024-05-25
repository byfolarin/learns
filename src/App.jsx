import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

  const [inputText, setInputText] = useState('');
 
  return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <Form setInputText ={setInputText}/>
        <TodoList/>
      </div>
  );
}

export default App;
