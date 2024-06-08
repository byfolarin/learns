import React from 'react'
import myImage from '../assets/images/1.jpeg';


const Carousel = () => {
  return (
    <div className='container'>
      <div className="left-box"></div>
      <div className="right-box"></div>
      <div className="img-space">
      <img src={myImage} alt="" />
      </div>
    </div>
  )
}

export default Carousel
