"use client"
import { subscribeToCurrentTimeValue } from "@/hooks/observableService";
import React, { useEffect, useRef, useState } from "react";
const Content = ({data}: {data: any}) => {
  const [lyrics, setLyrics] = useState([{ time: 0, text: '' }]);
  const [currentTime, setCurrentTime] = useState(0);
  const [lineHeight, setLineHeight] = useState(0)
  const lyricsContainerRef = useRef<any>(null);

  useEffect(() => {
    fetch(data?.lyric)
      .then((response) => response.text())
      .then(async (data: any) => {
        const lines = await data.split('\n');
        const parsedLyrics: any = await lines.map((line: string, index: number) => {
          let [time, text] = line.split(']');
          time = time.substring(1);
          const timeComponents = time.split(':');
          const minutes = parseInt(timeComponents[0], 10);
          const seconds = parseFloat(timeComponents[1]);

          if (!isNaN(minutes) && !isNaN(seconds)) {
            const totalSeconds = minutes * 60 + seconds;
            return { time: totalSeconds, text: text.trim() };
          } else {
            // console.warn(`Invalid time format at line ${index + 1}: ${time}`);
            return null;
          }
        }).filter(Boolean);
        // console.log('Parsed lyrics:', parsedLyrics);
        setLyrics(parsedLyrics);
      })
      .catch((error) => {
        console.error('Error fetching or parsing lyrics:', error);
      });
      
     
    const subscription = subscribeToCurrentTimeValue((value: any) => {
      setCurrentTime(value)
    });
  
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const getCurrentLyric  = () => {
    const lyricIndex =  lyrics.findIndex((lyric: any) =>lyric.time > currentTime)
    const currentLyric : any  = (lyricIndex == lyrics.length-1 || lyricIndex == -1) ? (lyrics[lyrics.length-1]) : (lyrics[lyricIndex - 1]) ;
    // console.log(" --- " , lyricIndex , lyrics.length , currentLyric)
   
    // if (lyricsContainerRef.current ) {
    //   const lineElement = lyricsContainerRef.current.querySelector('.lyric-line');
    //   if (lineElement) {
    //     const containerHeight = 200
    //     const lyricHeight = lyricsContainerRef.current.children[lyricIndex]?.clientHeight;
    //     const scrollCenter = (lyricIndex * lyricHeight) - (containerHeight / 2) + (lyricHeight / 2);
       
    //     // const res = (lyricIndex-1) * height
    //     console.log(" --- " ,scrollCenter , lyricIndex  , containerHeight)  
    //     if( lyricIndex != -1){
    //       console.log("--- current ----")
    //       lyricsContainerRef.current.scrollTo({
    //         top: scrollCenter,
    //         behavior: 'smooth',
    //       });
    //     }
       
    //   }
    // }

    
  
  return currentLyric  || { text: '' }
};

  return (
    <div className="text-2xl text-white mb-2 leading-10">
      <div ref={lyricsContainerRef as any} style={{ maxHeight: '400px', overflowY: 'auto' }}>
      {
          lyrics.length > 0 ? 
            lyrics.map((item: any , index : number) => {
              if (item.text == getCurrentLyric().text) {
                return (
                  <div key={index} className="lyric-line" >
                    <p className="bg-pink-700 p-4" key={index} >{item.text}</p>
                  </div>
                  
                )
              } else {
                return (
                  <p className="text-gray-300" key={index} >{item.text}</p>
                )
              }
            })
           : <p className="text-5xl">Not available this music in Lyric Servie</p>
        }
      </div>
    </div>
  );

};
export default Content;