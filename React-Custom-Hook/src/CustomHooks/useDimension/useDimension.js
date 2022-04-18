import { useState, useEffect } from 'react';

export function useDimension( properties) {

    const [dimension, setDimension] = useState();
    
    useEffect(() => {
    
        function resizeFunction() {
        
            setDimension(window.innerWidth)
        };
        window.addEventListener('resize', resizeFunction);

        resizeFunction();
    
    
    return () => {
        window.removeEventListener('resize', resizeFunction);
    };
    }, []);

    return dimension

};