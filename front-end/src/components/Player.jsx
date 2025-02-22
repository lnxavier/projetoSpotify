import { faBackwardStep, faCirclePause, faCirclePlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from 'react';
import { Link, } from "react-router-dom";


const Player = ({duration, songsArray, artistSong, id, audio}) => {

    const songsArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artistSong.name);
    const indexSong = songsArtist.findIndex((currentSongObj) => currentSongObj._id === id);
    const prevSong = songsArtist[(((indexSong - 1) + songsArtist.length)) % songsArtist.length]._id;
    const nextSong = songsArtist[(indexSong + 1) % songsArtist.length]._id;

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
        const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`
    }

    const formatTimeString = (timeString) => {
        const secondsMinutes = timeString.split(':');
        const minutes = Number(secondsMinutes[0]);
        const seconds = Number(secondsMinutes[1]);
        return seconds + minutes * 60;
    }

    const durationInSeconds = formatTimeString(duration);

    const [currentTime, setCurrentTime] = useState(formatTime(0));
    const [isPlaying, setIsPlaying] = useState(false);
    
    const audioPlayer = useRef();
    const progressBar = useRef();

    const playPause = () => {
        isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
        setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(isPlaying) setCurrentTime(formatTime(audioPlayer.current.currentTime))
                progressBar.current.style.setProperty(
            '--_progress',
            (audioPlayer.current.currentTime / durationInSeconds) * 100 + '%'
            );
        },1000);

        return () => clearInterval(intervalId);
    }, [isPlaying]);
    
  return (
    <div className='player'>
        <div className='player__controllers'>
            <Link to={`/song/${prevSong}`}>
                <FontAwesomeIcon className="player__icon" icon={faBackwardStep}/>
            </Link>
            
            <FontAwesomeIcon className="player__icon player__icon--play" icon={isPlaying ? faCirclePause : faCirclePlay} onClick={() => playPause()}/>
            
            <Link to={`/song/${nextSong}`}>
                <FontAwesomeIcon className="player__icon" icon={faForwardStep}/>
            </Link>
        </div>

        <div className="player__progress">
            <p>{currentTime}</p>
            
            <div className="player__bar">
                <div ref={progressBar} className="player__bar-progress"></div>
            </div>
            
            <p>{duration}</p>
        </div>

        <audio ref={audioPlayer} src={audio}></audio>
    </div>
  )
}

export default Player