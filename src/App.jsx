import { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';


function App() {

  const [image, setImage] = useState([])




  return (
    

    
      <div className="App">

           <h1>Images</h1>
           <Carousel />
           
      </div>
  );
}

export default App;
