import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./MusicForm.css";

export default function MusicForm ({ addAlbum }) {
    //Default to clear
    const [albumName, setAlbumName] = useState('');
    const [albumGenre, setGenre] = useState('');
    const [albumFormat, setFormat] = useState('');
    const [albumRating, setRating] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        // Call addAlbum function passed from parent component
        addAlbum({ albumName, albumFormat, albumGenre, albumRating });

        // Clear form fields after submission
        setAlbumName('');
        setGenre('');
        setFormat('');
        setRating('');
    };

    return (
        <Form onSubmit={handleSubmit}> {/* Tied to above functionality for button click */}
            <Form.Group className="mb-3" controlId="albumName">
                <Form.Label>Name of the Album:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Album Name"
                    value={albumName}
                    onChange={e => setAlbumName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="albumGenre">
                <Form.Label>The Album's Genre:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Genre"
                    value={albumGenre}
                    onChange={e => setGenre(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="albumFormat">
                <Form.Label>Choose the Album's Format:</Form.Label>
                <Form.Select value={albumFormat} onChange={e => setFormat(e.target.value)}>
                    <option>Select one:</option>
                    <option value="CD">CD</option>
                    <option value="LP Record">LP Record</option>
                    <option value="MP3">MP3</option>
                    <option value="Cassette Tape">Cassette Tape</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId="albumRating">
                <Form.Label>Your Rating of the Album</Form.Label>
                <Form.Control
                    type="number"
                    min='0'
                    max='10'
                    step='1'
                    placeholder="Rating (from 0 to 10)"
                    value={albumRating}
                    onChange={e => setRating(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">Add Album</Button>
        </Form>
    );
};