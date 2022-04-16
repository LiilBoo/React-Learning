
import './App.css';
import { useState, useEffect, useRef } from 'react';
import difficultNameVideo from './Assets/difficultNameVideo.mp4';

function App() {


  const ref = useRef();

  useEffect(() => {
  
   window.addEventListener('resize', actionResize)
  
    function actionResize() {
    
        console.log("Resized ! But pick a size and stick to it")
    };

    console.log(ref);

    setTimeout(() => {
      ref.current.pause()
    }, 5000);

  return () => {
      window.removeEventListener('resize', actionResize);
  };
  }, []);


  return (
    <div className="App">

      <video 
      width="750"
      height="500"
      autoPlay
      controls
      muted
      ref={ref}
      >
        <source  src={difficultNameVideo}
        type="video/mp4"/>

      </video>



        
    </div>
  );
}

export default App;
