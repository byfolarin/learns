import React from 'react'
import { useState } from 'react'

// Traffic Light:
// Create a component for a traffic light that can be in three states: "red", "yellow", and "green". Use state to manage the current light color and buttons to change between them.

const Traffic = () => {
    const [color, setColor] = useState('red'); // Current color (string)


    function handleClicks(){
        switch(color){
        case 'red':
        setColor('yellow');
        break;
        case 'yellow':
        setColor('green');
        break;
        default:
        setColor('red'); // Reset to red from green
        }
    }


  return (
    <div>
      <div>
    <h2>Color: {color}</h2>
    <button onClick={handleClicks}>Click</button>
  </div>
    </div>
  )
}

export default Traffic
