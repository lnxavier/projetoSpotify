import React from 'react'
import { artistArray } from '../assets/database/artists.js'
import { songsArray } from '../assets/database/songs.js'
import ItemList from './ItemList.jsx'

const Main = ({type}) => {
  return (
    
    <div className='main'>
        {/* Item list of artist */}
        {type === 'artists' || type === undefined ? 
        <ItemList 
          title = 'Artistas' 
          items = {10} 
          itemsArray = {artistArray} 
          path = '/artists'
          idPath = '/artist'
        /> : <></>
        }
      
        {/* Item list of songs */}
        {type === 'songs' || type === undefined ?
        <ItemList 
          title = 'Músicas' 
          items = {20} 
          itemsArray = {songsArray} 
          path = '/songs'
          idPath = '/song'
        /> : <></>
        }
    </div>
  )
}

export default Main