import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import ToDoItem from './components/TodoItem';


function App() {

 
  return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <Form/>
        <TodoList/>
        <ToDoItem/>
      </div>
  );
}

export default App;
