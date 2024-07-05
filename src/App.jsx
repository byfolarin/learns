import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import instagram from '../assets/instagram.svg'



function App() {



  return (
    <>
    <BrowserRouter>

    <div className="container">
          <ul className='style-side-bar'>
                  <h2 className='logo-repo'><img src={instagram} alt="" /></h2>
                  <li className='side--bar-list-items'><Link to={"/"}>Home</Link></li>
                  <li className='side--bar-list-items'><Link to={"/"}>Search</Link></li>
                  <li className='side--bar-list-items'><Link to={"/"}>Explore</Link></li>
                  <li className='side--bar-list-items'><Link to={"/"}>Reels</Link></li>
                  <li className='side--bar-list-items'><Link to={"/"}>Messages</Link></li>
                  <li className='side--bar-list-items'><Link to={"/"}>Notification</Link></li>
                  <li className='side--bar-list-items'><Link to={"/"}>Create</Link></li>
                  <li className='side--bar-list-items'><Link to={"/Profile"}>Profile</Link></li>
                  <li className='side--bar-list-items'><Link to={"/"}>More</Link></li>
          </ul>
    

   
    <Routes>
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
   
      </div>

  </BrowserRouter>
    </>
      
  )
}

export default App;
