import React, { useState } from 'react'
import Posts from '../Posts'
import { Link } from 'react-router-dom'
import PostsIcon from '../../assets/PostsIcon'
import ReelsIconss from '../../assets/ReelsIconss'
import SavedIcons from '../../assets/SavedIcons'
import TaggedIcons from '../../assets/TaggedIcons'
import ProfileImg from './ProfileImg'
import Bio from '../Navigation/Bio'
import EditProfile from './EditProfile'
import ViewArchive from './ViewArchive'
import AdTools from './AdTools'



const Profile = ({defaultImageSrc, setDefaultImageSrc}) => {

  return (
    <>
    <div className="container">

      <div className="profile-container">

      <div className="profile-header-section">


                  <ProfileImg defaultImageSrc ={defaultImageSrc} />

                      <div className="top-nav-wrapper">

                                  <div className="wrap-profile-edit">

                                          <div className="name-change">
                                            <h2>byfolarin</h2>
                                          </div>
                                          
                                          <div className="lump-edit">
                                             <EditProfile />
                                             <ViewArchive />
                                             <AdTools/>
                                          </div>
                                  </div>


                              <div className="profile-count-edit">

                                      <div className="post-change">
                                        8 post
                                      </div>
                                      
                                      <div className="profile-followers-change">
                                      194 followers
                                      </div>

                                      <div className="profile-following-change">
                                      449 following
                                      </div>
                                    
                              </div>

                                <Bio/>
                              </div>

                              
                              


       </div>
  
                                  <div className="stories-img">

                                  

                                        <div className="sub-wrapper">

                                            <div className="ring-wrap">
                                                <div className="img-stories"></div>
                                                </div>  
                                            <div className="sub-text">3D</div>

                                            </div>



                                            <div className="sub-wrapper">

                                            <div className="ring-wrap">
                                                <div className="img-stories"></div>
                                                </div>  
                                            <div className="sub-text">Randoms</div>

                                            </div>


                                            <div className="sub-wrapper">

                                            <div className="ring-wrap">
                                                <div className="img-stories"></div>
                                                </div>  
                                            <div className="sub-text">Process</div>

                                            </div>

                                            <div className="sub-wrapper">

                                            <div className="ring-wrap">
                                                <div className="img-stories"></div>
                                                </div>  
                                            <div className="sub-text">Illustration</div>

                                            </div>


                                            <div className="sub-wrapper">

                                          <div className="ring-wrap">
                                              <div className="img-stories"></div>
                                              </div>  
                                          <div className="sub-text">Portfolio</div>

                                          </div>

                                                <div className="sub-wrapper">

                                            <div className="ring-wrap">
                                                <div className="img-stories"></div>
                                                </div>  
                                            <div className="sub-text">Tablet</div>
                                            
                                        </div>

                                        <div className="sub-wrapper">

                                        <div className="ring-wrap">
                                            <div className="img-stories"></div>
                                            </div>  
                                        <div className="sub-text">Behance</div>

                                        </div>




                            
                                        </div>
          


      <section className='section-posts'>
        
        <div className="posts">
        <Link to={"/Posts"} className='icons-text'> <div ><PostsIcon/> </div>POSTS</Link>
        <Link to={"/Reels"} className='icons-text'> <div ><ReelsIconss/> </div>REELS</Link>
        <Link to={"/Saved"} className='icons-text'> <div ><SavedIcons/> </div> SAVED</Link>
        <Link to={"/Tagged"} className='icons-text'> <div><TaggedIcons/> </div> TAGGED</Link>
        </div>
     
         <Posts/>


















      </section>










      </div>















    </div>
    </>

    

  )
 }

export default Profile
