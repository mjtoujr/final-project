import React from "react";
import MoviesItem from "../moviesItem/MoviesItem";

export default function MoviesList ({ movies, editMovie, deleteMovie }) { 
    return (
        <div className="movie-list">
            {movies.map((movie) => ( //API traits and app.js functions being passed down for each Movie entry
                <MoviesItem
                    key={movie.id}
                    movie={movie}
                    editMovie={editMovie}
                    deleteMovie={deleteMovie}
                />
            ))}
        </div>
    );
};