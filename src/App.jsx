import './App.css';
import React, { useState, useEffect } from 'react';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';


function App() {
 
  return (
    <div className='body'>
      <div className="App">
        <header>
          <h1>Todo-List</h1>
        </header>
        <FormInput/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
