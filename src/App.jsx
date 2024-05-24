import {} from 'react'
import './App.css'
import InputList from './components/TodoList'
import InputField from './components/FormInput'
import Toggle from './components/Todo'


const App = () => {
  return (
    <>
   
   <div className="container">
   <InputField />
    <Toggle />
   </div>
    <InputList />

    </>
  )
}

export default App
