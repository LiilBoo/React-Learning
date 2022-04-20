
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { 
  Home,
  Profile,
  Profile2,
  NotFound
} from './Pages';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/profile/:id" element={<Profile2/>}/>
      <Route path="*" element={<NotFound/>}>

      </Route>
     </Routes>
    </div>
  );
}

export default App;
