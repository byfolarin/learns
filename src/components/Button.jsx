import React from 'react'
import { useState } from 'react'

const Button = () => {

 const [time, setTime] = useState(false)

 const handleClick=()=>{
    setTime(!time)
 }

  return (
    <div className='shift'>
      <button onClick={handleClick} className='light'>Toggle</button>
      <h2>The light is: {time ? "On" : "Off"} </h2>
    </div>
  )
}

export default Button
