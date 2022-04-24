import './Card.css'

export function Card( properties) {


    return (
    <div className='card'>
        {properties.children}
    </div>
    )

};