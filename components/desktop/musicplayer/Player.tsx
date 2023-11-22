/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect, useState } from 'react';

const Player = ({ activeSong, volume, isPlaying, seekTime, repeat, currentIndex ,  onEnded, onTimeUpdate, onLoadedData } : { activeSong : any, volume : any , isPlaying : any , seekTime : any, repeat : any,  currentIndex : any,  onEnded : any, onTimeUpdate : any, onLoadedData : any }) => {
  const audioRef = useRef<any>(null);
  const [maxTime,setMaxTime] = useState(0)
  useEffect(() => {
    // console.log(activeSong )
    audioRef.current.volume = volume;
    seekTime = audioRef.current.currentTime
    setMaxTime(audioRef.current.duration)
    if (isPlaying && activeSong?.audio) {
      audioRef.current.play();
    } 
    else {
       audioRef.current.pause()
    }
  
  }, [volume,seekTime,isPlaying,maxTime]);

  return (
    <audio
      src={activeSong?.audio || ''}
      ref={audioRef}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData(maxTime || 0.00)}
    />
  );
};

export default Player;
