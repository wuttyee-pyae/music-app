import React from 'react';

// import { HeartIcon } from "./HeartIcon";
import { PauseCircleIcon } from "@/components/crbtplayer/PauseCircleIcon";
import { PlayIcon } from "@/components/crbtplayer/PlayIcon";
import { NextIcon } from "@/components/crbtplayer/NextIcon";
import { PreviousIcon } from "@/components/crbtplayer/PreviousIcon";
import { RepeatOneIcon } from "@/components/crbtplayer/RepeatOneIcon";
import { ShuffleIcon } from "@/components/crbtplayer/ShuffleIcon";

// import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
// import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around md:w-64 lg:w-52 2xl:w-80 gap-4">
    <RepeatOneIcon size={20} color={repeat ? 'blue' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="sm:block cursor-pointer" />
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
