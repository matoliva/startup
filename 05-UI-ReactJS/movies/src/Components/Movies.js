import React from "react";
import { Movie } from "./Movie.js";

export const Movies = ({ items, onFavourite, onDelete }) => (
    <ul>
        {items.map((item, index) => (
            <Movie
                key={index}
                {...item}
                onFavourite={() => onFavourite(index) }
                onDelete={() => onDelete(index) }
            />
        ))}
    </ul>
);

export default Movies;