import React, { useState } from 'react';
import myImage from '../assets/images/1.jpeg';
import thisImage from '../assets/images/2.jpeg';
import heyImage from '../assets/images/3.jpeg';

const Carousel = () => {
  const loopImg = [myImage, thisImage, heyImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % loopImg.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + loopImg.length) % loopImg.length);
  };

  return (
    <div className='container'>
      <div className="arrows">
        <h1>Updated Code</h1>
        <div className="left-box" onClick={handlePrevClick}><i class="fa-solid fa-arrow-up"></i></div>
        <div className="right-box" onClick={handleNextClick}><i class="fa-solid fa-arrow-down"></i></div>
      </div>
      <div className="img-space">
        <img src={loopImg[currentIndex]} alt={`Carousel ${currentIndex}`} />
      </div>
    </div>
  );
};

export default Carousel;
