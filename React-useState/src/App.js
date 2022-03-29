

import { useState } from "react";
import { Item } from './components'




function App() {

  console.log(`App updating : (re-)Rendering`);


  const [myState, setMyState] = useState(10);
  
  const modifyState = () => {
          setMyState(20);
  };

  return (
    <div className="App">
      <h1>Goodbye world</h1>
      <h1>Hello state : {myState}</h1>
      <Item/>
      <button onClick={modifyState}>Change State</button>
    </div>
  );
};

export default App;
