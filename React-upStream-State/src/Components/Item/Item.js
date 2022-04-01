import { useState } from "react";
import './Item.css'

/**
 * @param  {} props
 */

export function Item(props) {
 
    const { number, txt, propertiesFunction} = props;

    const [ItemState, setItemState] = useState(`useState of Item state !`);


return (
    <>
        <h1 className="item-title">Hello from Item component</h1>
    <button onClick={() => propertiesFunction(ItemState)}>
        Changing Item State ?
    </button>
    </>

    )
    
};