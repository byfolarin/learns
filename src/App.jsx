import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import Instagram from './assets/Instagram'
import Homelogo from './assets/Homelogo';
import SearchLogo from './assets/SearchLogo';
import ExploreIcon from './assets/ExploreIcon';
import ReelsIcon from './assets/ReelsIcon';
import MessageIcon from './assets/MessageIcon';
import NotificationIcon from './assets/NotificationIcon';
import CreateIcon from './assets/CreateIcon';
import MoreIcon from './assets/MoreIcon';



function App() {
  return (
    <>
    <BrowserRouter>

    <div className="container">
          <ul className='style-side-bar'>
                  <h2 className='logo-repo'><Instagram/></h2>

                  <li className='side--bar-list-items'>
                    <Link to={"/"} className='icons-text'>
                        <div className="homelogo">
                          <Homelogo/>
                          </div>
                          Home
                    </Link>
                  </li>


                  <li className='side--bar-list-items'>
                    <Link to={"/"} className='icons-text'>
                    <div className="homelogo">
                      <SearchLogo/>
                    </div>  Search
                      </Link>
                  </li>


                  <li className='side--bar-list-items'>
                    <Link to={"/"} className='icons-text'>
                    <div className="homelogo">
                          <ExploreIcon/>
                          </div>
                    Explore
                    </Link>
                    </li>

                    
                  <li className='side--bar-list-items'>
                    <Link to={"/"} className='icons-text'>
                    <div className="homelogo">
                          <ReelsIcon/>
                          </div>
                    Reels</Link>
                    </li>


                  <li className='side--bar-list-items'>
                    <Link to={"/"} className='icons-text'>
                    <div className="homelogo">
                          <MessageIcon/>
                          </div>Messages</Link>
                    </li>


                  <li className='side--bar-list-items'>
                    <Link to={"/"} className='icons-text'>
                    <div className="homelogo">
                          <NotificationIcon/>
                    </div>
                    Notification</Link>
                  </li>


                  <li className='side--bar-list-items'>
                    <Link to={"/"} className='icons-text'>
                    <div className="homelogo">
                          <CreateIcon/>
                          </div>
                    Create</Link>
                  </li>


                  <li className='side--bar-list-items'>
                    <Link to={"/Profile"}>
                    
                    Profile</Link>
                  </li>


                  <li className='side--bar-list-items'>
                    <Link to={"/"} className='icons-text'>                 
                    <div className="homelogo">
                          <MoreIcon/>
                          </div>
                          More</Link>
                  </li>
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
