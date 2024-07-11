import React, { useState } from 'react'
import img1 from '../assets/images/insta1.png'
import img2 from '../assets/images/Dashboard.png'
import img3 from '../assets/images/cards.png'

const Posts = () => {


  const [postHold, setPostHold] =useState([])





  return (
    <div>
         <div className="profile-gallery">
          <div className="first-img">
            <div className="img-container"><img src={img1} alt="" /></div>
        </div>

          <div className="first-img">
          <div className="img-container"><img src={img2} alt="" /></div>
          </div>

          <div className="first-img">
          <div className="img-container"><img src={img3} alt="" /></div>
          </div>
          
        </div>
     

    </div>
  )
}

export default Posts
