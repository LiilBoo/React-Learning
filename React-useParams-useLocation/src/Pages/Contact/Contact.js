
import { useLocation } from 'react-router-dom';

export function Contact() {

    const location = useLocation();

    console.log(location);

    //returns an object who has infos on the location as properties
    //such as : 
    // - hash 
    // - key 
    // - pathname 
    // - search 
    // - state 
    // Where state is any and can be an object itself


    return (
    <>
    <h1>Welcome to Contact Page</h1>
    <h1>Welcome to Contact Page</h1>
    </>
    )

};