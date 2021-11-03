import { useState } from 'react';

function Todo(props) {

    // call directly in component
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler() {
        // console.log("Clicked!");
        // console.log(props.title);

     }
  
    return (
        <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
            <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        </div>
    );
}
export default Todo;
