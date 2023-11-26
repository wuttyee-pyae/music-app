/* eslint-disable jsx-a11y/media-has-caption */
import { Slider } from '@nextui-org/react';
import React, { useRef, useEffect, useState } from 'react';
import { subscribeToValue } from '@/hooks/observableService';
import { useDispatch } from 'react-redux';
import {
  playPause,
} from "../../../redux/features/playMusicSlice";


const Player = ({ activeSong, volume, isPlaying, repeat ,  onEnded } : 
  { activeSong : any, volume : any , isPlaying : boolean , repeat : any, onEnded : any }) => {
    // const dispatch = useDispatch();
  const audioRef = useRef<any>(null);
  const [maxTime,setMaxTime] = useState(0)
  const [appTime, setAppTime] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const getTime = (time : any) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;


  // const maxTime = getTime(max)
  useEffect(() => {
    console.log(activeSong , isPlaying , volume  )
    audioRef.current.volume = volume;
    setSeekTime(audioRef.current.currentTime);
    setMaxTime(audioRef.current.duration || 0);
    // const subscription = subscribeToValue((value : any) => {
    //   console.log("subscription in player componnet -- ")
    //   isPlaying ? dispatch(playPause(true))  : dispatch(playPause(false))
    // });
    if(audioRef.current || activeSong){
    if (isPlaying) {
      audioRef.current.play();
    } 
    else {
       audioRef.current.pause()
    }
    
    }
    return () => {
      // subscription.unsubscribe();
    };
  }, [isPlaying,maxTime, volume ]);

 
  return (
    <>
    <div className="flex flex-row justify-center items-center w-full gap-4">
    <button type="button" onClick={() => setMaxTime(appTime - 5)} className="lg:mr-4 lg:block text-white">
      -
    </button>
    <p className="text-white">{maxTime === 0 ? '0:00' : getTime(appTime)}</p>

    <Slider   
      size="sm"
      step={0.01} 
      maxValue={1} 
      minValue={0} 
      color="secondary"
      showOutline={true}
      value={seekTime}
      aria-label="Temperature"
      className="max-w-md" 
    />
    <p className="text-white">{maxTime === 0 ? '0:00' : getTime(maxTime)}</p>
    <button type="button" onClick={() => setMaxTime(appTime + 5)} className="lg:ml-4 lg:block text-white">
      +
    </button>
  </div>
    <audio 
      src={activeSong?.audio || ''}
      ref={audioRef}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={(event : any ) => setAppTime(event.target.currentTime || 0.00)}
      onLoadedData={(event : any ) => setMaxTime(event.target.currentTime || 0.00)}
    />
    </>
  );
};

export default Player;