import { NextIcon } from "../crbtplayer/NextIcon";
import { PauseCircleIcon } from "../crbtplayer/PauseCircleIcon";
import { PlayIcon } from "../crbtplayer/PlayIcon";
import { PreviousIcon } from "../crbtplayer/PreviousIcon";
import { RepeatOneIcon } from "../crbtplayer/RepeatOneIcon";
import { ShuffleIcon } from "../crbtplayer/ShuffleIcon";
import { RepeatAllIcon } from "../crbtplayer/RepeatAllIcon";

const Controls = (( {isPlaying, repeatStatus, setRepeatStatus, shuffle, setShuffle, handlePlayPause, handlePrevSong, handleNextSong} : 
  {isPlaying : boolean, repeatStatus : string, setRepeatStatus : any, shuffle : string, setShuffle : any , handlePlayPause :any, handlePrevSong : any, handleNextSong: any})=> {
  return(
    <div>
      <div className="flex items-center justify-around md:w-64 lg:w-52 2xl:w-80 gap-4">
      <RepeatOneIcon size={20} color={repeatStatus == 'repeat' ? 'blue' : 'white'} onClick={() => setRepeatStatus((repeat: any) => !repeat)} className="sm:block cursor-pointer" />
      <RepeatAllIcon size={20} color={repeatStatus == 'repeatAll' ? 'blue' : 'white'} onClick={() => setRepeatStatus((repeatAll: any) => !repeatAll)} className="sm:block cursor-pointer" />

      <PreviousIcon size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />
      {isPlaying ? (
        <PauseCircleIcon size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      ) : (
        <PlayIcon size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      )}
      <NextIcon size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />
      <ShuffleIcon size={20} color={shuffle ? 'blue' : 'white'} onClick={() => setShuffle((prev: any) => !prev)} className="sm:block cursor-pointer" />
    </div>
    </div>
  )
})

export default Controls;
