import React from 'react'
import img1 from '../assets/images/insta1.png'
import img2 from '../assets/images/Dashboard.png'

const Posts = () => {
  return (
    <div>
         <div className="profile-gallery">

    
          <div className="first-img">
            <div className="img-container"><img src={img1} alt="" /></div>
        </div>



          <div className="first-img">
          <div className="img-container"><img src={img2} alt="" /></div>
          </div>
          <div className="first-img"></div>
        </div>

        <div className="profile-gallery">
          <div className="first-img"></div>
          <div className="first-img"></div>
          <div className="first-img"></div>
        </div>

    </div>
  )
}

export default Posts
