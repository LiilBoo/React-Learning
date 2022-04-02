import { useState } from 'react';


function App() {

  const [toggle, setToggle] = useState(true);

  const changeState = () => {
           setToggle(!toggle)
  };

  let toggleContent;
  let otherContent = <h2>we're true and short-cuited</h2>

  if(toggle){
    toggleContent = <h1>The state is truthy</h1>
  } else {
    toggleContent = <h1>The state is falsy</h1>
  }

  if(toggle){

    return (
      <div className="App">
        <h1>The state is true</h1>
        {toggleContent}
        {toggle ? 
        <h2>otherContent says yes</h2>
        :
        <h2>otherContent says no</h2> 
      }
      {toggle && otherContent}
        <button onClick={changeState}>
          Change the state
        </button>
      </div>
    );

  } else if (toggle === false){


    return (
      <div className="App">
        <h1>The state is FALSE !!! </h1>
        {toggleContent}
        {toggle ? 
        <h2>otherContent says yes</h2>
        :
        <h2>otherContent says no</h2> 
      }
        <button onClick={changeState}>
          Change the state
        </button>
      </div>
    );



  }



  
}

export default App;
