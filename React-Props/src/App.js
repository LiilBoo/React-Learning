import { useState } from 'react';
import { Item } from './Components'

function App() {

  console.log(`(re-)Rendering`);

  const [myState, setMyState] = useState(10);

  const modifyState = () => {
    setMyState(20);
  };


  return (
    <div className="App">
      <h1>Hello the state : {myState}</h1>
    
    <Item number={myState}/>
    
    <button onClick={modifyState}>
      Change the state
    </button>
   
    </div>
  );
}

export default App;
