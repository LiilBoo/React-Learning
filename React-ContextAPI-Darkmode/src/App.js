import './App.css';
import { Content } from './Components';
import {
	ThemeContextProvider,
	ThemeContext,
} from './Contexts';

function App() {
	return (
		<div className='App'>
      <ThemeContextProvider>
			<Content />
      </ThemeContextProvider>
		</div>
	);
}

export default App;
