import React from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

const VolumeBar = ({ value, min, max, onChange }: { value : any , min : number, max : number, onChange : any }) => {
  return(
    <div className="flex items-center justify-end">
    {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={25} color="#FFF"  />}
    {value <= 0.5 && value > 0 && <BsVolumeDownFill size={25} color="#FFF"  />}
    {value == 0 && <BsFillVolumeMuteFill size={25} color="#FFF"  />}
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      className="2xl:w-40 lg:w-32 md:w-16 h-1 ml-2"
    />
  </div>
  ); 
  
  };

export default VolumeBar;
