

import { useState } from 'react';


function App() {

  const [inputData, setInputData] = useState(11);

  const changeInput = (event) => {
       //console.log(event);
       setInputData(event)
  };

  console.log(inputData);

  return (
    <div className="App">
      <h1>I'm the H1 of App component</h1>
      <input 
      type="text"
      value={inputData}
      onInput={ event => changeInput(event.target.value)}
      />
    </div>
  );

}

export default App;
