import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
 
  return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <Form/>
        <TodoList/>
      </div>
  );
}

export default App;
