"use client"
import React, { useEffect } from "react";
import MusicPlayer from "@/components/desktop/musicplayer/MusicPlayer"
import { subscribeToValue } from "@/hooks/observableService";
import useStorage from "@/hooks/useStorage";
import { CloseIcon } from "../common/icons/CloseIcon";
import { MinusIcon } from "../common/icons/MinusIcon";
import { MinimizeIcon } from "../common/icons/MinimizeIcon";
import { FullScreenIcon } from "../common/icons/FullScreenIcon";
import { useDispatch } from "react-redux";
import { playPause } from "../../redux/features/playMusicSlice";


export default function Footer() {
  const storage = useStorage()
  const dispatch = useDispatch();
  const [isExpand, setIsExpand] = React.useState(false)
  const [closed, setClosed] = React.useState(true)

  const doExpend = () => {
    setIsExpand(!isExpand)
  }

  const closedMusic = () => {
    storage.removeItem('play-music', 'session')
    setClosed(true)
    dispatch(playPause(false));
  }

  useEffect(() => {
    const sessionSong = storage.getItem('play-music', 'session');
    if(sessionSong) {
       setClosed(false) ;
    }else{
      setClosed(true)
    }

   const subscription = subscribeToValue((value : any) => {
    console.log(" ---  footer subscription" ,value)
    value && setClosed(false)
    });
    
    return () => {
      subscription.unsubscribe();
      
    };
    
  }, [subscribeToValue]);

  return (
    <div className={`${closed ? 'hidden' : 'block'}`}>
      <footer className={`footer-container fixed-bottom border-gradient border-gradient-purple only-top ${isExpand && 'top-0 flex justify-center items-center'} `}>
        <MusicPlayer doExpend={doExpend} isExpand={isExpand} />
        <div className="absolute top-3 right-3 cursor-pointer gap-8 flex">
         {
            isExpand ?
            <div onClick={() => setIsExpand(false)}>
            <MinusIcon color={'#fff'} size={15} />
            </div>  : 
            <div onClick={() => setIsExpand(true)}>
          <FullScreenIcon color={'#fff'} size={15}   />
          </div>
         }
          
          
          <div  onClick={closedMusic}>
          <CloseIcon color={'#fff'} size={15} />
          </div>
          
        </div>
      </footer>
    </div>
  );
}
