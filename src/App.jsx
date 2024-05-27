import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Thermostat from './components/Thermostat';


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
      </div>
  );
}

export default App;
