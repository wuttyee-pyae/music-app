import { Slider } from '@nextui-org/react';
import React from 'react';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime } : { value : any  , min : number, max : number, onInput : any, setSeekTime : any, appTime : any }) => {
  // converts the time to format 0:00
  
  const getTime = (time : any) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;
  const maxTime = getTime(max)
  return (
    <div className="flex flex-row justify-center items-center w-full gap-4">
      <button type="button" onClick={() => setSeekTime(appTime - 5)} className="lg:mr-4 lg:block text-white">
        -
      </button>
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
      {/* <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={maxTime}
        onInput={onInput}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      /> */}
      <Slider   
        size="sm"
        step={0.01} 
        maxValue={1} 
        minValue={0} 
        color="secondary"
        showOutline={true}
        aria-label="Temperature"
        defaultValue={0.2}
        className="max-w-md" 
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <button type="button" onClick={() => setSeekTime(appTime + 5)} className="lg:ml-4 lg:block text-white">
        +
      </button>
    </div>
  );
};

export default Seekbar;
