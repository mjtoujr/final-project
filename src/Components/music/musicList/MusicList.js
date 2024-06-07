import React from "react";
import MusicItem from "../musicItem/MusicItem";

export default function MusicList ({ albums, editAlbum, deleteAlbum }) { 
    return (
        <div className="album-list">
            {albums.map((album) => ( //API traits and app.js functions being passed down for each Album entry
                <MusicItem
                    key={album.id}
                    album={album}
                    editAlbum={editAlbum}
                    deleteAlbum={deleteAlbum}
                />
            ))}
        </div>
    );
};