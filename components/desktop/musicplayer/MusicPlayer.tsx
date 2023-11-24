import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import {
  nextSong,
  prevSong,
  playPause,
  setActiveSong,
} from "../../../redux/features/playMusicSlice";

import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";
import { LyricsIcon } from "./LyricsIcon";
import useStorage from "@/hooks/useStorage";
import { subscribeToValue } from '@/hooks/observableService';

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const storage = useStorage();
  const { activeSong ,songList ,  currentIndex  , isActive  , isPlaying  } =
  useSelector((state : any) => state.musicplay);
  
  // const [duration, setDuration] = useState(0);
  // const [seekTime, setSeekTime] = useState(0);
  const [currentSong, setCurrentSong] = useState(storage.getItem('play-music', 'session'));
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  useEffect( () => {
    console.log( " active song  in use effect -- "  , activeSong , isActive , volume)
   const subscription = subscribeToValue((value : any) => {

    const sessionSong = storage.getItem('play-music', 'session');
      dispatch(setActiveSong(sessionSong))
    console.log( " active song  in use effect -- "  , sessionSong , activeSong , isActive)
    dispatch(playPause(true));
      // if(sessionSong && isPlaying) {
        setCurrentSong(sessionSong)
      // }
    });
    
    return () => {
      subscription.unsubscribe();
    };
    
  }, []);

  const handlePlayPause = () => {
    // if (!isActive) return;
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
    setMusicPlaying(isPlaying)
  };

  const handleNextSong = () => {
    dispatch(playPause(false));
    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % songList.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * songList.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(songList.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * songList.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };
  
  
  return (
    <div className="relative sm:px-4 px-8 my-3 w-full items-center justify-between grid grid-cols-12 gap-4">
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={currentSong}
        data={currentSong}
      />
      <div className="flex-1 flex flex-col items-center justify-center lg:col-span-6 col-span-8">
        <Controls
          isPlaying={musicPlaying}
          repeat={repeat as any}
          setRepeat={setRepeat as any}
          shuffle={shuffle as any}
          setShuffle={setShuffle as any}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
       <Player
          activeSong={currentSong}
          volume={volume}
          isPlaying={musicPlaying}
          // seekTime={seekTime}
          repeat={repeat}
          onEnded={handleNextSong}
          // onTimeUpdate={(event : any ) => setAppTime(event.target.currentTime)}
          // onLoadedData={(time  : any) =>  setDuration(time)}
        /> 
      </div>
      <div className="flex-1 flex items-center justify-end gap-4 lg:col-span-3 col-span-4">
        <LyricsIcon />
        <VolumeBar
        value={volume}
        min={0}
        max={1}
        onChange={(event : any) => {setVolume(event.target.value)}}
      />
      </div>
      
    </div>
  );
};

export default MusicPlayer;
