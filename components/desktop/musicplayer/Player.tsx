/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect, useState } from 'react';
import { updateCurrentTimeValue } from '@/hooks/observableService';


const Player = ({ activeSong, volume, isPlaying, repeatStatus ,  onEnded , isExpand } : 
  { activeSong : any, volume : any , isPlaying : boolean , repeatStatus : any, onEnded : any , isExpand : boolean}) => {
  const audioRef = useRef<any>(null);
  const [maxTime,setMaxTime] = useState(0)
  const [appTime, setAppTime] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const getTime = (time : any) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;


  useEffect(() => {
    // console.log(activeSong , isPlaying , volume  , maxTime )
    if(audioRef.current || activeSong){
      audioRef.current.volume = volume;
      setSeekTime(audioRef.current.currentTime);
      setMaxTime(audioRef.current.duration || null);
    if (isPlaying) {
      audioRef.current.play();
    } 
    else {
       audioRef.current.pause()
    }
    }
  }, [isPlaying,maxTime, volume ]);
  
  const onChangeCurrentTime = () =>{
    updateCurrentTimeValue(audioRef.current.currentTime)
  }

  return (
    <>
    <div className={`flex flex-row justify-center items-center w-full gap-4 ${isExpand && 'mt-10'}`}>
    {/* <button type="button" onClick={() => setMaxTime(appTime - 5)} className="lg:mr-4 lg:block text-white">
      -
    </button> */}
    <p className="text-white">{maxTime === 0 ? '0:00' : getTime(seekTime)}</p>

    <input   
      type="range"
      max={maxTime} 
      min={0} 
      color="secondary"
      value={seekTime || 0}
      onChange={(e : any) => {setSeekTime(e.target.value) }}
      onMouseUp={(e : any) =>{ audioRef.current.currentTime = e.target.value , setSeekTime(audioRef.current.currentTime) , setAppTime(audioRef.current.currentTime)} }
      onTouchEnd={(e : any) => { audioRef.current.currentTime = e.target.value , setSeekTime(audioRef.current.currentTime) , setAppTime(audioRef.current.currentTime)} }
      className="md:block w-[28vw] h-1 mx-4 2xl:mx-6 rounded-lg"
    />
    <p className="text-white">{maxTime === 0 ? '0:00' : getTime(maxTime)}</p>
    {/* <button type="button" onClick={() => setMaxTime(appTime + 5)} className="lg:ml-4 lg:block text-white">
      +
    </button> */}
  </div>
    <audio 
      src={activeSong?.audio || ''}
      ref={audioRef}
      loop={repeatStatus === 'repeat' ? true : false}
      onEnded={onEnded}
      onTimeUpdate={(event : any ) => {setSeekTime(event.target.currentTime || 0.00), onChangeCurrentTime() }}
      onLoadedData={(event : any ) => setMaxTime(event.target.currentTime || 0.00)}
    />
    </>
  );
};

export default Player;
