
import { Item } from './Components';
import { useState } from 'react';

function App() {


  const [ myState, setMyState] = useState(10);

  const modifyState = (data) => {
    setMyState(data)
  };

  return (
    <div className="App">
      <h1> Hello state : {myState} </h1>
      <Item propertiesFunction={modifyState}/>
    </div>
  );
}

export default App;
