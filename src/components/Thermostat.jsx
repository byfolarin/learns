import React from 'react'
import { useState } from 'react'

const Thermostat = () => {

  const [temperature, setTemperature] = useState(20); // Initial temperature
  const increment = () => setTemperature(temperature + 1);
  const decrement = () => setTemperature(temperature - 1);

 return (
  <div>
    <h2>Temperature Today: {temperature}°C</h2>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);
}

export default Thermostat
