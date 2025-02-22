import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'
import Player from '../components/Player'

const Song = () => {

  const {id} = useParams();

  const {image, name, artist, duration, audio} = songsArray.filter((currentSongObj) => {
    return currentSongObj._id === id;
  })[0];

  const artistSong = artistArray.filter((currentArtistObj) => {
    return currentArtistObj.name === artist;
  })[0];

  return (
    <div className='song'>
      <div className='song__container'>
        <div className='song__image-container'>
          <img src={image} alt="Imagem da Música" />
        </div>
      </div>

      <div className='song__bar'>
        <Link to={`/artist/${artistSong._id}`}> 
          <img 
            src={artistSong.image}
            alt="Imagem do artista"
            width={75}
            height={75} 
          />
        </Link>
        
        <Player 
          duration = {duration}
          id = {id}
          songsArray = {songsArray}
          artistSong = {artistSong}
          audio = {audio}
        />
        
        <div>
          <p className='song__name'>{name}</p>
          <p>{artist.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Song