import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./MusicEdit.css";

export default function MusicEdit ({ album, editAlbum, cancelEdit }) {
    //confirming that values are defined
    const [albumName, setAlbumName] = useState(album ? album.albumName : '');
    const [albumGenre, setGenre] = useState(album ? album.albumGenre : '');
    const [albumFormat, setFormat] = useState(album ? album.albumFormat : '');
    const [albumRating, setRating] = useState(album ? album.albumRating : '');
    //passing down values to use as placeholders
    useEffect(() => {
        setAlbumName(album ? album.albumName : '');
        setGenre(album ? album.albumGenre : '');
        setFormat(album ? album.albumFormat: '');
        setRating(album ? album.albumRating : '');
    }, [album]);

    const handleSubmit = e => {//functionality for submitting the edit form
        e.preventDefault();

        // Call editAlbum function passed from parent component
        editAlbum({ ...album, albumName, albumGenre, albumFormat, albumRating });

        // Clear form fields after submission
        setAlbumName('');
        setGenre('');
        setFormat('');
        setRating('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="albumName">
                <Form.Label>Name of the Album:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={albumName || "Album Name"} //Placeholders take on the existing properties; otherwise, default to field names
                    value={albumName}
                    onChange={e => setAlbumName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="albumGenre">
                <Form.Label>The Album's Genre:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={albumGenre || "Genre"} //Placeholders take on the existing properties; otherwise, default to field names
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
                    placeholder={albumRating || "Rating (from 1 to 10)"} //Placeholders take on the existing properties; otherwise, default to field names
                    value={albumRating}
                    onChange={e => setRating(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit">Save</Button>
            <Button variant="danger" type="button" onClick={cancelEdit}>Cancel</Button>
        </Form>
    );
};