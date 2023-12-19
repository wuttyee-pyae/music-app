"use client"
import React, { useEffect } from "react";
import MusicPlayer from "@/components/desktop/musicplayer/MusicPlayer"
import { CloseFilledIcon } from "./nav/icons/CloseFilledIcon";
import { subscribeToValue } from "@/hooks/observableService";
import useStorage from "@/hooks/useStorage";

export default function Footer() {
  const storage = useStorage()
  const [isExpand, setIsExpand] = React.useState(false)
  const [closed, setClosed] = React.useState(false)

  const doExpend = () => {
    setIsExpand(!isExpand)
  }

  const closedMusic = () => {
    storage.removeItem('play-music', 'session')
    setClosed(true)
  }

  useEffect(() => {
    const sessionSong = storage.getItem('play-music', 'session');
    console.log(" -- " , sessionSong);
    if(sessionSong) {
      console.log(" is not nulll ") ;
       setClosed(false) ;
    }else{
      setClosed(true)
      console.log(" is nulll" , closed);
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
      <footer className={`footer-container fixed-bottom border-gradient border-gradient-purple only-top ${isExpand ? 'top-0' : ''} `}>
        <div className="absolute top-1 right-2 text-xl" onClick={closedMusic}>
          <CloseFilledIcon />
        </div>
        <MusicPlayer doExpend={doExpend} isExpand={isExpand} />
      </footer>
    </div>
  );
}
