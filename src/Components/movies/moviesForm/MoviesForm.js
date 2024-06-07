import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./MoviesForm.css";

export default function MoviesForm ({ addMovie }) {
    //Default to clear
    const [movieName, setMovieName] = useState('');
    const [movieGenre, setGenre] = useState('');
    const [movieSynopsis, setSynopsis] = useState('');
    const [movieRating, setRating] = useState('');

    const handleSubmit = e => {//functionality for submitting the form
        e.preventDefault();

        // Call addMovie function passed from parent component
        addMovie({ movieName, movieSynopsis, movieGenre, movieRating });

        // Clear form fields after submission
        setMovieName('');
        setGenre('');
        setSynopsis('');
        setRating('');
    };

    return (
        <Form onSubmit={handleSubmit}> {/* Tied to above functionality for button click */}
            
            <Form.Group className="mb-3" controlId='movieName'>
                <Form.Label>Name of the Movie:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Movie Name"
                    value={movieName}
                    onChange={e => setMovieName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="movieGenre">
                <Form.Label>Choose the Genre:</Form.Label>
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
                    placeholder="A brief summary of the movie"
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
                    placeholder="Rating (from 0 to 10)"
                    value={movieRating}
                    onChange={e => setRating(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">Add Movie</Button>
        </Form>
    );
};