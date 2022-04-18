import { useDimension } from './CustomHooks';
import './App.css';

function App() {

  const browserWidth = useDimension();
  console.log(browserWidth);
  return (
    <div className="App">
      <h1>A custom hook is running, it's checking browser dimension</h1>
    </div>
  );
}

export default App;
