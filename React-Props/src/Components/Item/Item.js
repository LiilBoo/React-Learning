import { useState } from "react";
import './Item.css'


function Item(props) {
 
    const { number, txt, func} = props;

    const [ItemState, setItemState] = useState(`useState of Item state`);

    console.log(props, `Rendering of an Item component`);

return (
    <div>
        <h1 className="titre-item">Hello from Item component</h1>
        <h2>{number}</h2>

    <button onClick={() => func(ItemState)}>
        Changing Item State ?
    </button>

    </div>
)
    
};

export default Item;