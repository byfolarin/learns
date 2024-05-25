import './App.css';
import React, { useState, useEffect } from 'react';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';


function App() {
 
  return (
      <div className="App">
          <h1>Todo-List</h1>
        <FormInput/>
        <TodoList/>
      </div>
  );
}

export default App;
