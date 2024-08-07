import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Instagram from './assets/Instagram'
import Homelogo from './assets/Homelogo';
import SearchLogo from './assets/SearchLogo';
import ExploreIcon from './assets/ExploreIcon';
import ReelsIcon from './assets/ReelsIcon';
import MessageIcon from './assets/MessageIcon';
import NotificationIcon from './assets/NotificationIcon';
import CreateIcon from './assets/CreateIcon';
import MoreIcon from './assets/MoreIcon';
import SideBarProfile from './components/Profile/SideBarProfile';
import { useState } from 'react';
import profile from './components/Profile/GM2_KvuXMAE-ZRk.jpeg'
import CreateModal from './components/Modals/CreateModal';


function App() {

  const [defaultImageSrc, setDefaultImageSrc] = useState([profile]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  

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
                    < div className='icons-text' onClick={handleProfileClick}>
                    <div className="homelogo" >
                          <CreateIcon/>
                          </div>
                          Create </div>      
                  </li>

                  {isModalOpen && <CreateModal/>}


                  <li className='side--bar-list-items'>
                    <Link to={"/Profile"} className='icons-text'>
                    <div className="homelogo">
                          <SideBarProfile defaultImageSrc ={defaultImageSrc}
                      setDefaultImageSrc={setDefaultImageSrc}/>
                          </div>
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
                    <Route path="/Profile"
                     element={<Profile defaultImageSrc ={defaultImageSrc}
                     setDefaultImageSrc={setDefaultImageSrc}/>} />
                  </Routes>
              
                  </div>

  </BrowserRouter>
    </>
      
  )
}

export default App;
