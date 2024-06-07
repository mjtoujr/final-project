import React, { useState } from 'react';
import MoviesEdit from '../moviesEdit/MoviesEdit';
import Button from "react-bootstrap/Button";

export default function MoviesItem ({ movie, editMovie, deleteMovie}) {
    const [isEditing, setIsEditing] = useState(false); //Edit field defaults to off

    const handleEditClick = () => {//Turning on edit field
        setIsEditing(true);
    }

    const handleCancelEdit = () => { //Functionality for the cancel button in MoviesEdit
        setIsEditing(false);
    }

    return(
        <div className='movie-item'>
            {!isEditing ? (
                <>
                <h3>{movie.movieName}</h3>
                <p>Genre: {movie.movieGenre}</p>
                <p>Synopsis: {movie.movieSynopsis}</p>
                <p>Rating: {movie.movieRating}</p>
                <Button variant="warning" onClick={handleEditClick}>Edit</Button>
                <Button variant="dark" onClick={() => deleteMovie(movie.id)}>Delete</Button> {/* Delete functionality passed down */}
                </>
            ) : ( /* Edit functionality flipped on*/
                <MoviesEdit
                    movie={movie}
                    editMovie={editedMovie => {
                        console.log("Edited Movie:", editedMovie);
                        editMovie(editedMovie);
                        setIsEditing(false);
                    }}
                    cancelEdit={handleCancelEdit}
                />
            )}
        </div>
    )
}