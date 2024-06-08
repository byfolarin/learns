import React, { useState } from 'react'
import myImage from '../assets/images/1.jpeg';
import thisImage from '../assets/images/2.jpeg';
import heyImage from '../assets/images/3.jpeg';


const Carousel = () => {

  const [current,setCurrent] = useState([myImage]);
  const loopImg = [myImage,thisImage,heyImage];

  function handleClick(){
    setCurrent(item=>[...item,...loopImg]);
  }



  return (
    <div className='container'>

      <div className="arrows">
      <div className="left-box" onClick={handleClick}><i class="fa-solid fa-arrow-up"></i></div>
      <div className="right-box" onClick={handleClick}><i class="fa-solid fa-arrow-down"></i></div>
      </div>

      
      <div className="img-space">
      <img src={current} alt="" />
      </div>
    </div>
  )
}

export default Carousel
