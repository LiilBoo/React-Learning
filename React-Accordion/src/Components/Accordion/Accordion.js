
import { useState, useRef, useEffect } from 'react';
import './Accordion.css';
import chevron from './chevron.svg';

export function Accordion() {


    const [toggle, setToggle] = useState(false);
    const [heightElement, setHeightElement] = useState();

    const toggleState = () => {
             setToggle(!toggle)
    };

    const refHeight = useRef();

    useEffect(() => {
    
        setHeightElement(`${refHeight.current.scrollHeiht}px`)
    
    
    return () => {
        
    };
    }, []);

	return (
		<div 
        onClick={toggleState}
        className='accordion'>
			<div className='accordion-visible'>
				<h2>Lorem ipsum dolor sit amet.</h2>
				<img src={chevron} alt='chevron down' />
			</div>
            <div ref={refHeight} 
            className={ toggle ? 'accordion-toggle animated' : 'accordion-toggle'}
            style={{height : toggle ? `${heightElement}` : '0px'}}
            >
                <p> aria-hidden={toggle ? 'true' : 'false'}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ipsam voluptatum asperiores explicabo? Officia vel, praesentium perspiciatis itaque adipisci sapiente quos aut nostrum aspernatur tenetur, quisquam minima. Distinctio libero voluptas eum magnam, sint placeat aliquam eius culpa, quas ea excepturi?
                </p>
            </div>
		</div>
	);
}
