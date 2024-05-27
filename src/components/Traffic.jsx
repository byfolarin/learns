import React, { useState } from 'react';

function Traffic() {
  const [isRedOn, setIsRedOn] = useState(true);
  const [isYellowOn, setIsYellowOn] = useState(false);
  const [isGreenOn, setIsGreenOn] = useState(false);

  const handleClick = () => {
    // Update states based on current state
    if (isRedOn) {
      setIsRedOn(false);
      setIsYellowOn(true);
    } else if (isYellowOn) {
      setIsYellowOn(false);
      setIsGreenOn(true);
    } else {
      setIsGreenOn(false);
      setIsRedOn(true);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Change Light</button>
      <div>
        <div style={{ backgroundColor: isRedOn ? 'red' : 'gray' }}></div>
        <div style={{ backgroundColor: isYellowOn ? 'yellow' : 'gray' }}></div>
        <div style={{ backgroundColor: isGreenOn ? 'green' : 'gray' }}></div>
      </div>
    </div>
  );
}

export default Traffic;
