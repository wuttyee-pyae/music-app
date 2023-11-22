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
  const { activeSong , currentSongs, currentIndex  , isActive  , isPlaying  } =
  useSelector((state : any) => state.musicplay);
  
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [music, setMusic] = useState({});
  const [musicPlaying, setMusicPlaying] = useState(false);
  const storage = useStorage();


  useEffect(() => {
    setMusicPlaying(isPlaying)
    // if (currentSongs.length > 0) dispatch(playPause(true));
    let sessionSong = storage.getItem('play-music', 'session');
   const subscription = subscribeToValue((value : any) => {
     sessionSong = storage.getItem('play-music', 'session');
    setMusic(sessionSong);
    console.log(music , sessionSong)
      if(sessionSong && isPlaying) {

      }
    });
    
    return () => {
      subscription.unsubscribe();
    };
    
  }, [isPlaying]);

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
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };
  
  
  return (
    <div className="relative sm:px-4 px-8 my-3 w-full items-center justify-between grid grid-cols-12 gap-4">
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
        data={music}
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
        <Seekbar
          value={appTime}
          min= {0}
          max={duration}
          onInput={(event : any) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        {
          music ? <Player
          activeSong={music}
          volume={volume}
          isPlaying={musicPlaying}
          seekTime={seekTime}
          repeat={repeat}
          onEnded={handleNextSong}
          onTimeUpdate={(event : any ) => setAppTime(event.target.currentTime)}
          onLoadedData={(time  : any) =>  setDuration(time)}
        />  : null
        }
        
      </div>
      <div className="flex-1 flex items-center justify-end gap-4 lg:col-span-3 col-span-4">
        <LyricsIcon />
        <VolumeBar
        value={volume}
        min={0}
        max={1}
        onChange={(event : any) => setVolume(event.target.value)}
      />
      </div>
      
    </div>
  );
};

export default MusicPlayer;
