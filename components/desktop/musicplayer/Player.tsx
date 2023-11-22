/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect, useState } from 'react';

const Player = ({ activeSong, volume, isPlaying, seekTime, repeat ,  onEnded, onTimeUpdate, onLoadedData } : { activeSong : any, volume : any , isPlaying : boolean , seekTime : any, repeat : any, onEnded : any, onTimeUpdate : any, onLoadedData : any }) => {
  const audioRef = useRef<any>();
  const [maxTime,setMaxTime] = useState<any>()
  useEffect(() => {
    console.log(activeSong , isPlaying )
    if(audioRef.current){
    if (isPlaying) {
      audioRef.current.play();
    } 
    else {
       audioRef.current.pause()
    }
    audioRef.current.volume = volume;
    seekTime = audioRef.current.currentTime
    setMaxTime(audioRef.current.duration)
    }
  }, [activeSong]);

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