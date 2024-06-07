import React, { useState, useEffect } from "react";
import MoviesList from "../moviesList/MoviesList";
import MoviesForm from "../moviesForm/MoviesForm";
import Accordion from "react-bootstrap/Accordion";

const BaseURL = 'https://66492f534032b1331bed6ffa.mockapi.io/movie'; //MockAPI is in place

export default function MoviesHub() {
    const [movies, setMovies,] = useState([]);

    useEffect(() => { //Pulling data from API
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch(`${BaseURL}`);
            const data = await response.json();
            setMovies(data);
        } catch (error) {
            console.error('Error fecthing Movies:', error);
        }
    };

    const addMovie = async newMovie => { //Functionality for sending request to create new entry
        try {
            const response = await fetch(`${BaseURL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMovie),
            });
            const data = await response.json();
            setMovies([...movies, data]);
        } catch (error) {
            console.error('Error adding Movie:', error);
        }
    };

    const editMovie = async editedMovie => { //Functionality for sending request update entry
        try {
            const response = await fetch(`${BaseURL}/${editedMovie.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedMovie),
            });
            if (!response.ok) {
                throw new Error('Failed to edit Movie');
            }
            const data = await response.json();
            const updatedMovies = movies.map(movie =>
                movie.id === editedMovie.id ? data : movie
            );
            setMovies(updatedMovies);
        } catch (error) {
            console.error('Error editing Movie:', error);
        }
    };

    const deleteMovie = async id => { //Functionality for sending request to remove entry
        try {
            await fetch(`${BaseURL}/${id}`, {
                method: 'DELETE',
            });
            const updatedMovies = movies.filter(movie => movie.id !== id);
            setMovies(updatedMovies);
        } catch (error) {
            console.error('Error deleting Movie:', error);
        }
    };

    return(
        <div className="MoviesHub">
            <h1>Movie Collection Tracker</h1>
            <h2>Current Collection:</h2>
            <MoviesList movies={movies} editMovie={editMovie} deleteMovie={deleteMovie} />
            <Accordion>
                <Accordion.Header>Add a New Movie:</Accordion.Header>
                <Accordion.Body>
                    <MoviesForm addMovie={addMovie} />
                </Accordion.Body>
            </Accordion>
        </div>
    )
}


//Code that tested for basic functionality; kept in case of future necessity, but moved to the end of the code
/*const movies = [ //Set movies for testing purposes
    {
        id: 1,
        movieName: "The Shawshank Redemption",
        genre: "Drama",
        synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        rating: 9.3
    },
    {
        id: 2,
        movieName: "Deathstalker 2",
        genre: "Sci-Fi/Fantasy",
        synopsis: "A jerk with a sword and a jerk princess who can see the future team up to defeat even bigger jerks in this low budget comedy adventure.",
        rating: 1.8
    }
]

const editMovie = (editedMovie) => { //Testing-functionality
    // Logic to edit the Movie
    console.log("Edited Movie:", editedMovie);
    };

const deleteMovie = (deletedMovie) => { //Testing-functionality
    // Logic to edit the Movie
    console.log("Deleted Movie:", deletedMovie);
    };

const addMovie = (addedMovie) => { //Testing-functionality
    // Logic to edit the Movie
    console.log("Added Movie:", addedMovie);
    };*/