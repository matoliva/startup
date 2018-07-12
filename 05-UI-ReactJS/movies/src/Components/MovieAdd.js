import React from "react";
import './movieAdd.css';

export const MovieAdd = ({ onAdd }) => {
    let input;
    const onSubmit = event => {
        event.preventDefault();
        onAdd(input.value);
        input.value = "";
    };

    return (
        <div className="movieAdd">
            <h1>CRUD Movies</h1>
            <form onSubmit={onSubmit}> 
                <input type="text" ref={inputRef => input = inputRef} placeholder="Name of Movie" required/>
                <button type="submit" className="buttonAdd">Add</button>
            </form> 
        </div>
    );
};