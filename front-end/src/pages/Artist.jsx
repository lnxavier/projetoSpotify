import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import SongList from "../components/SongList";

const Artist = () => {

  const {id} = useParams();
  
  const artistId = artistArray.filter((currentArtistObj) => currentArtistObj._id === id)[0];
  const songsArtistId = songsArray.filter((currentSongObj) => currentSongObj.artist === artistId.name); 
  
  const randomSongIndex = (Math.floor((Math.random()*(songsArtistId.length -1))));
  const randomSong = songsArtistId[randomSongIndex]._id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistId.banner})`,
        }}
      >
        <h2 className="artist__title">{artistId.name}</h2>
      </div>

    <div className="artist__body">
      <h2>Populares</h2>

      <SongList songsArray = {songsArtistId}/>
    </div>

    <Link to= {`/song/${randomSong}`}>
      <FontAwesomeIcon
        className="single-item__icon single-item__icon--artist"
        icon={faCirclePlay}
      />
    </Link>
  </div>
  )
}

export default Artist