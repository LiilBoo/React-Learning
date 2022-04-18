
import './App.css';
import { CardContent } from './Components';

function App() {
  return (
    <div className="App">
      <CardContent>
        <h1>Content received by my slots upon use of the component</h1>
        <p>
          Yes, I'm parapragh who comes from properties.children ( friendly reminder that properties = Object)
        </p>
      </CardContent>
      <CardContent>
        <h1>So am I : 2</h1>
        <p>
          So do we : 2
        </p>
      </CardContent>
      <CardContent>
        <h1>So am I : 3</h1>
        <p>
          So do we : 3
        </p>
      </CardContent>
    </div>
  );
}

export default App;
