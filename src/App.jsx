import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';



function App() {



  return (
    <>
    <BrowserRouter>
    
    <ul>
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/"}>Search</Link></li>
    <li><Link to={"/"}>Explore</Link></li>
    <li><Link to={"/"}>Reels</Link></li>
    <li><Link to={"/"}>Messages</Link></li>
    <li><Link to={"/"}>Notification</Link></li>
    <li><Link to={"/"}>Create</Link></li>
    <li><Link to={"/"}>Profile</Link></li>
    <li><Link to={"/"}>More</Link></li>
    </ul>

    <>
    
    </>


  </BrowserRouter>
    </>
      
  )
}

export default App;
