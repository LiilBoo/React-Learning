import { useContext } from 'react';
import { ThemeContext } from '../../Contexts';

import './ToggleButton.css';

export function ToggleButton() {
	const { toggleTheme, theme } =
		useContext(ThemeContext);

	return (
        <>
        {/* <button
			onClick={toggleTheme}
			className='btn-toggle'>
			{theme ? 'LIGHT' : 'DARK'}
		</button> */}
        <input type="checkbox" id="toggle" onClick={toggleTheme}/>
        </>
		
	);
}
