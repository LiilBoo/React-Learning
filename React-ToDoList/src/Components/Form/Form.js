import { useState } from 'react';
import { Item } from '../Item';
import { v4 as uuidv4 } from 'uuid';

export function Form() {


    const [dataArray, setDataArray] = useState([
        {txt: "Learn React.JS",
        id:uuidv4()},
        {txt: "Learn React.TS",
        id:uuidv4()},
        {txt: "Learn Vue",
        id:uuidv4()},
        {txt: "Learn Angular",
        id:uuidv4()},
        {txt: "Learn Next.js",
        id:uuidv4()},
        {txt: "Learn Nuxt",
        id:uuidv4()},
        {txt: "Touch Hydrogen, Blitz, Gatsby, Remix",
        id:uuidv4()},
        {txt: "Learn Java 11 SpringBoot",
        id:uuidv4()},
        {txt: "Learn DevOps",
        id:uuidv4()},
    ]);

    const deleteElement = (id) => {
            const filteredState = dataArray.filter((item) => {
                return item.id !== id
            })

            setDataArray(filteredState);
    };

    const [stateInput, setStateInput] = useState();

    const linkedInput = (event) => {
        
        setStateInput(event);
    };

    const addToDo = (event) => {
    
        event.preventDefault();

        const newArray = [...dataArray];
        const newToDoItem = {};

        newToDoItem.txt = stateInput;
        newToDoItem.id = uuidv4();

        newArray.push(newToDoItem);
        setDataArray(newArray);
    };

    return (
    
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

        <form  
        onSubmit={(event) => addToDo(event)}
        className="mb-3">
            <label htmlFor="todo" className="form-label mt-3">
                Write an imperative here
            </label>
            <input 
            type="text"
            className="form-control"
            id="todo"
            onInput={(event) => linkedInput(event.target.value)}
            />
            <button className="mt-2 btn btn-primary d-block">Send</button>
            </form>

            <h2>Stuf you gotta do</h2>
            <ul className="list-group">
           {
               dataArray.map((item) => {

                return <Item 
                txt={item.txt}
                key={item.id}
                id={item.id}
                deleteFunction={deleteElement}
                />
               })
           }
            </ul>
    </div>
    )

};