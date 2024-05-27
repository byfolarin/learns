import React from 'react'
import { useState } from 'react'

const Button = () => {

 const [time, setTime] = useState(true)



  return (
    <div className='shift'>
      <button className='light'>Toggle</button>
      <h2>The light is: </h2>
    </div>
  )
}

export default Button
