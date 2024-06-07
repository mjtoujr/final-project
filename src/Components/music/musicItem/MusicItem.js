import React, { useState } from 'react';
import MusicEdit from '../musicEdit/MusicEdit';
import Button from "react-bootstrap/Button";

export default function MusicItem ({ album, editAlbum, deleteAlbum }) {
    const [isEditing, setIsEditing] = useState(false);//Edit field defaults to off

    const handleEditClick = () => {//Turning on edit field
        setIsEditing(true);
    };

    const handleCancelEdit = () => { //Functionality for the cancel button in AlbumEdit
        setIsEditing(false);
    };

    return (
        <div className='album-item'> 
            {!isEditing ? (
                <> {/* The default view*/}
                    <h3>{album.albumName}</h3>
                    <p>Genre: {album.albumGenre}</p>
                    <p>Format: {album.albumFormat}</p>
                    <p>Rating: {album.albumRating}</p>
                    <Button variant="warning" onClick={handleEditClick}>Edit</Button>
                    <Button variant="dark" onClick={() => deleteAlbum(album.id)}>Delete</Button> {/* Delete functionality passed down */}
                </>
            ) : ( /* Edit functionality flipped on*/
                <MusicEdit
                    album={album}
                    editAlbum={editedAlbum => {
                        console.log("Edited Album:", editedAlbum);
                        editAlbum(editedAlbum);
                        setIsEditing(false);
                    }}
                    cancelEdit={handleCancelEdit}
                />
            )}
        </div>
    );
}