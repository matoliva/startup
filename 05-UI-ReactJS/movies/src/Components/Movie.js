import React from "react";
import './movie.css'

export const Movie = ({ value, favourite, onFavourite, onDelete }) => (
    <div className="movie">
        <div>
            
            <h3>Title</h3> 
            <span className="title">{value}</span>
            <p className="check">
                <span>{favourite? ' fav' : ' not fav'}</span>
                <input
                    type="checkbox"
                    checked={favourite}
                    onChange={event => { onFavourite(); }}
                />
            </p>
            
        </div>
        <button
            onClick={event => { event.preventDefault(); onDelete(); }} className="buttonRemove"
        >Remove</button>
    </div>
);

export default Movie;