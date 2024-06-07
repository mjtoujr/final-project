import "./MoviesEdit.css";
import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function MoviesEdit({movie, editMovie, cancelEdit}) {
    //confirming that values are defined
    const [movieName, setMovieName] = useState(movie ? movie.movieName : '');
    const [movieGenre, setGenre] = useState(movie ? movie.movieGenre : '');
    const [movieSynopsis, setSynopsis] = useState(movie ? movie.movieSynopsis : '');
    const [movieRating, setRating] = useState(movie ? movie.movieRating : '');
    //passing down values to use as placeholders
    useEffect(() => {
        setMovieName(movie ? movie.movieName : '');
        setGenre(movie ? movie.movieGenre : '');
        setSynopsis(movie ? movie.movieSynopsis: '');
        setRating(movie ? movie.movieRating : '');
    }, [movie]);

    const handleSubmit = e => {//functionality for submitting the edit form
        e.preventDefault();

        // Call editMovie function passed from parent component
        editMovie({ ...movie, movieName, movieGenre, movieSynopsis, movieRating });

        // Clear form fields after submission
        setMovieName('');
        setGenre('');
        setSynopsis('');
        setRating('');
    };

    return (
        <Form onSubmit={handleSubmit}> {/* Tied to above functionality for button click */}
            <Form.Group className="mb-3" controlId="movieName">
                <Form.Label>Name of the Movie:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={movieName || "Movie Name"} //Placeholders take on the existing properties; otherwise, default to field names
                    value={movieName}
                    onChange={e => setMovieName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="movieGenre">
                <Form.Label>Choose the Genre:</Form.Label>
                <p>(Current Genre: {movie.movieGenre})</p>
                <Form.Select value={movieGenre} onChange={e => setGenre(e.target.value)}>
                    <option>Select one:</option>
                    <option value="Action/Thriller">Action/Thriller</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror/Suspense">Horror/Suspense</option>
                    <option value="Musical">Musical</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Sci-Fi/Fantasy">Sci-Fi/Fantasy</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="movieSynopsis">
                <Form.Label>Movie Synopsis:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder={movieSynopsis || "A brief summary of the movie"} //Placeholders take on the existing properties; otherwise, default to field names
                    value={movieSynopsis}
                    onChange={e => setSynopsis(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="movieRating">
                <Form.Label>Your rating of the movie:</Form.Label>
                <Form.Control
                    type="number"
                    min='0'
                    max='10'
                    step='1'
                    placeholder={movieRating || "Rating (from 0 to 10)"} //Placeholders take on the existing properties; otherwise, default to field names
                    value={movieRating}
                    onChange={e => setRating(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit">Save</Button>
            <Button variant="danger" type="button" onClick={cancelEdit}>Cancel</Button>
        </Form>
    );
}