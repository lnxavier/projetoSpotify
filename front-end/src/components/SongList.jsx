import React, { useState } from 'react';
import SongItem from './SongItem';

const SongList = ({songsArray}) => {

  const [items, setItems] = useState(5);

  return (
    <div className='song-list'>
        {songsArray
          .filter((currentSongObj, index) => {
            return index < items;
          })
          .map((currentSongObj, index) => {
            return <SongItem
              {...currentSongObj}
              index = {index}
              key={index}
            />
          })}

        <p className='song-list__see-more' onClick={() => setItems(10)}>
          Ver mais
        </p>
    </div>
  )
}

export default SongList