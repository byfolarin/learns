import React, { useState } from 'react'
import img1 from '../assets/images/insta1.png'
import img2 from '../assets/images/Dashboard.png'
import img3 from '../assets/images/cards.png'

const Posts = (imgPost,setimgPost) => {
  return (
    <div>
         <div className="profile-gallery">

              <ul className="first-img">
                <li className="img-container"><img src={img1} alt="" /></li>
              </ul>

              <ul className="first-img">
                <li className="img-container"><img src={img2} alt="" /></li>
              </ul>

              <ul className="first-img">
                <li className="img-container"><img src={img3} alt="" /></li>
              </ul>
        </div>
    </div>
  )
}

export default Posts
