import React from 'react';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime } : { value : any  , min : number, max : number, onInput : any, setSeekTime : any, appTime : any }) => {
  // converts the time to format 0:00
  
  const getTime = (time : any) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;
  const maxTime = getTime(max)
  return (
    <div className="flex flex-row items-center">
      <button type="button" onClick={() => setSeekTime(appTime - 5)} className="lg:mr-4 lg:block text-white">
        -
      </button>
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={maxTime}
        onInput={onInput}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <button type="button" onClick={() => setSeekTime(appTime + 5)} className="lg:ml-4 lg:block text-white">
        +
      </button>
    </div>
  );
};

export default Seekbar;
