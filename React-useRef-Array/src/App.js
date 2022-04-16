
import './App.css';
import { useEffect, useRef } from 'react';
import difficultNameVideo from './Assets/difficultNameVideo.mp4';

function App() {

  

  const ref = useRef([]);

  useEffect(() => {
  
   console.log(ref);

  }, []);

  const addToRef = (eventObject) => {
           if(eventObject && !ref.current.includes(eventObject)){
             ref.current.push(eventObject)
           }
  };

  return (
    <div className="App">

      <video 
      width="750"
      height="500"
      autoPlay
      controls
      muted
      ref={addToRef}
      >
        <source  src={difficultNameVideo}
        type="video/mp4"/>

      </video>

      <video 
      width="750"
      height="500"
      autoPlay
      controls
      muted
      ref={addToRef}
      >
        <source  src={difficultNameVideo}
        type="video/mp4"/>

      </video>

      <video 
      width="750"
      height="500"
      autoPlay
      controls
      muted
      ref={addToRef}
      >
        <source  src={difficultNameVideo}
        type="video/mp4"/>

      </video>


     
     
        
    </div>
  );
}

export default App;
