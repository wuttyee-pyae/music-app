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
import { subscribeToValue, updateActiveValue } from '@/hooks/observableService';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import LyricsCard from './lyrics/LyricsCard';


const MusicPlayer = ({doExpend , isExpand}: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const storage = useStorage();
  const { activeSong ,songList ,  currentIndex  , isActive  , isPlaying  } =
  useSelector((state : any) => state.musicplay);
  const [volume, setVolume] = useState(0.3);
  const [repeatStatus, setRepeatStatus] = useState(null);
  const [shuffle, setShuffle] = useState(false);
  

  useEffect( () => {
    // dispatch(playPause(false));
   const subscription = subscribeToValue((value : any) => {
    // console.log("subscription" , value)
    const sessionSong = storage.getItem('play-music', 'session');
    sessionSong && dispatch(setActiveSong(sessionSong))
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
  };

  const handleNextSong = () => {
    if(songList.length > 0){
      dispatch(playPause(false));
    if (!shuffle) {
      if(currentIndex < songList.length ){
        dispatch(nextSong((currentIndex)));
        storage.setItem('play-music',songList[currentIndex], 'session');
      }else{
        dispatch(nextSong((0)));
        storage.setItem('play-music',songList[0], 'session');
      }
      repeatStatus === 'repeatAll' ? dispatch(playPause(true)) : null
      
    } else {
      const random = Math.floor(Math.random() * songList.length)
      dispatch(nextSong(random));
      storage.setItem('play-music',songList[random], 'session');
      repeatStatus === 'repeatAll' ? dispatch(playPause(true)) : null
    }
    updateActiveValue(true)
    }else{
      dispatch(playPause(false));
    }
    
  };

  const handlePrevSong = () => {
    if(songList.length > 0 ){
      if (shuffle) {
        const random = Math.floor(Math.random() * songList.length)
        dispatch(prevSong(random));
        storage.setItem('play-music',songList[random], 'session');
      } else {
        if(currentIndex != 1){
          dispatch(prevSong(currentIndex - 2));
          storage.setItem('play-music',songList[currentIndex - 2], 'session');
        }
      }
      updateActiveValue(true)
    }else{
      dispatch(playPause(false));
    }
  };

 
  
  
  return (
    <div className={`relative sm:px-4 px-8 my-3 w-full items-center justify-between flex gap-4 ${isExpand && 'flex-col'}`}>
      
      <div onClick={doExpend} className={`block my-auto mx-0 ${isExpand && 'min-h-[50dvh]  w-full'}` }>
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
        data={activeSong}
        isExpand={isExpand}
      />
      </div>
      
      <div className="flex flex-col items-center justify-center lg:col-span-6 col-span-8">
        <Controls
          isPlaying={isPlaying}
          repeatStatus={repeatStatus as any}
          setRepeatStatus={setRepeatStatus as any}
          shuffle={shuffle as any}
          setShuffle={setShuffle as any}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
       <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          repeatStatus={repeatStatus}
          onEnded={handleNextSong}
          // onTimeUpdate={(event : any ) => setAppTime(event.target.currentTime)}
          // onLoadedData={(time  : any) =>  setDuration(time)}
        /> 
      </div>
      <div className="flex items-center justify-end gap-4 lg:col-span-3 col-span-4">
        <Button
          onPress={onOpen}
          style={{
            background: "none",
          }}
        >
          <LyricsIcon />
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size={"3xl"}
          placement={"top-center"}
          // backdrop={"blur"}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-white">
                  <p>{activeSong?.name}</p>
                </ModalHeader>
                <ModalBody className="text-white leading-10">
                  <LyricsCard data={activeSong} />
                </ModalBody>
                <ModalFooter></ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
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
