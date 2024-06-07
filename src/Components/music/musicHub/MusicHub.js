import React, { useState, useEffect } from 'react';
import MusicList from '../musicList/MusicList';
import MusicForm from '../musicForm/MusicForm';
import Accordion from "react-bootstrap/Accordion";

const BaseURL = 'https://66492f534032b1331bed6ffa.mockapi.io/album'; //MockAPI is in place

export default function MusicHub() {
    const [albums, setAlbums,] = useState([]);

    useEffect(() => { //Pulling data from API
        fetchAlbums();
    }, []);

    const fetchAlbums = async () => {
        try {
            const response = await fetch(`${BaseURL}`);
            const data = await response.json();
            setAlbums(data);
        } catch (error) {
            console.error('Error fecthing Albums:', error);
        }
    };

    const addAlbum = async newAlbum => { //Functionality for sending request to create new entry
        try {
            const response = await fetch(`${BaseURL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAlbum),
            });
            const data = await response.json();
            setAlbums([...albums, data]);
        } catch (error) {
            console.error('Error adding Album:', error);
        }
    };

    const editAlbum = async editedAlbum => { //Functionality for sending request update entry
        try {
            const response = await fetch(`${BaseURL}/${editedAlbum.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedAlbum),
            });
            if (!response.ok) {
                throw new Error('Failed to edit Album');
            }
            const data = await response.json();
            const updatedAlbums = albums.map(album =>
                album.id === editedAlbum.id ? data : album
            );
            setAlbums(updatedAlbums);
        } catch (error) {
            console.error('Error editing Album:', error);
        }
    };

    const deleteAlbum = async id => { //Functionality for sending request to remove entry
        try {
            await fetch(`${BaseURL}/${id}`, {
                method: 'DELETE',
            });
            const updatedAlbums = albums.filter(album => album.id !== id);
            setAlbums(updatedAlbums);
        } catch (error) {
            console.error('Error deleting Album:', error);
        }
    };

    return(
        <div className="MusicHub">
            <h1>Music Collection Tracker</h1>
            <h2>Current Collection:</h2>
            <MusicList albums={albums} editAlbum={editAlbum} deleteAlbum={deleteAlbum} />
            <Accordion>
                <Accordion.Header>Add a New Album:</Accordion.Header>
                <Accordion.Body>
                    <MusicForm addAlbum={addAlbum} />
                </Accordion.Body>
            </Accordion>
        </div>
    )
}


//Code that tested for basic functionality; kept in case of future necessity, but moved to the end of the code
/*const albums = [ //Samples for testing purposes
    {
        id: 1,
        albumName: 'Jo Cat Grillin',
        genre: 'Swing Revival',
        format: 'CD',
        rating: 5.5
    },
    {
        id: 2,
        albumName: 'Dig the Devil Ditch',
        genre: 'Thrashcore',
        format: 'LP',
        rating: 7.8
    }
]

const editAlbum = (editedAlbum) => { //Testing-functionality
    // Logic to edit the album
    console.log("Edited Album:", editedAlbum);
    };

const deleteAlbum = (deletedAlbum) => { //Testing-functionality
    // Logic to edit the album
    console.log("Deleted Album:", deletedAlbum);
    };

const addAlbum = (addedAlbum) => { //Testing-functionality
    // Logic to edit the album
    console.log("Added Album:", addedAlbum);
    };*/