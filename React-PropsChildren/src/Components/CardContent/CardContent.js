
import './CardContent.css'

export function CardContent( properties) {


    return (
    <article className='content'>
    {properties.children}
    </article>
    )

};