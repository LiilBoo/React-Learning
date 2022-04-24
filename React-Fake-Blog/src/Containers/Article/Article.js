import './Article.css';
import { useLocation } from 'react-router-dom';

export function Article( properties) {

    const LOCATION = useLocation();

    return (
    <div className='article-content'>
        <h2>Your article : {LOCATION.state.title}</h2>
        <p>
            {LOCATION.state.body}
        </p>
    </div>
    )

};