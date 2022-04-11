import {useState, useEffect} from "react";
import { Timer } from './Components';


function App() {
	

  const [toggle, setToggle] = useState(false);



  const togglerFunction = () => {
           setToggle(!toggle);
  };


	return (
		<div className="App">
		
    <h2>{ toggle && <Timer/>}</h2>
      <button
      onClick={togglerFunction}
      >
        Toggle 
      </button>
		</div>
	);
}

export default App;
