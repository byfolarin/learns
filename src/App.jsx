import {} from 'react'
import './App.css'
import InputList from './components/InputList'
import InputField from './components/InputField'
import Toggle from './components/Toggle'


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
