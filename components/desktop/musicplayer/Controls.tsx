import React from 'react';

// import { HeartIcon } from "./HeartIcon";
import { PauseCircleIcon } from "@/components/desktop/crbtplayer/PauseCircleIcon";
import { PlayIcon } from "@/components/desktop/crbtplayer/PlayIcon";
import { NextIcon } from "@/components/desktop/crbtplayer/NextIcon";
import { PreviousIcon } from "@/components/desktop/crbtplayer/PreviousIcon";
import { RepeatOneIcon } from "@/components/desktop/crbtplayer/RepeatOneIcon";
import { ShuffleIcon } from "@/components/desktop/crbtplayer/ShuffleIcon";
import { Repeat } from 'react-feather';

// import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
// import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying = false, repeat= "", setRepeat=[], shuffle="", setShuffle="", currentSongs="", handlePlayPause="", handlePrevSong="", handleNextSong="" }) => (
  
  <div className="flex items-center justify-around md:w-64 lg:w-52 2xl:w-80 gap-4">
    <RepeatOneIcon size={20} color={repeat ? 'blue' : 'white'} onClick={() => setRepeat((prev : any) => !prev)} className="sm:block cursor-pointer" />
     <PreviousIcon size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />
    {isPlaying ? (
      <PauseCircleIcon size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <PlayIcon size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    <NextIcon size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />
    <ShuffleIcon size={20} color={shuffle ? 'blue' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="sm:block cursor-pointer" />
  </div>
);

export default Controls;
