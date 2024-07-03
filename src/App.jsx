import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';



function App() {



  return (
    <>
    <BrowserRouter>
    
    <ul className='style-side-bar'>
    <li className='side--bar-list-items'><Link to={"/"}>Home</Link></li>
    <li className='side--bar-list-items'><Link to={"/"}>Search</Link></li>
    <li className='side--bar-list-items'><Link to={"/"}>Explore</Link></li>
    <li className='side--bar-list-items'><Link to={"/"}>Reels</Link></li>
    <li className='side--bar-list-items'><Link to={"/"}>Messages</Link></li>
    <li className='side--bar-list-items'><Link to={"/"}>Notification</Link></li>
    <li className='side--bar-list-items'><Link to={"/"}>Create</Link></li>
    <li className='side--bar-list-items'><Link to={"/"}>Profile</Link></li>
    <li className='side--bar-list-items'><Link to={"/"}>More</Link></li>
    </ul>

    <>
    
    </>


  </BrowserRouter>
    </>
      
  )
}

export default App;
