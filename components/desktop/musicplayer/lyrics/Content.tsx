import { subscribeToCurrentTimeValue } from "@/hooks/observableService";
import React, { useEffect, useState } from "react";
const Content = () => {
  const [lyrics, setLyrics] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/artists/aung_htet/albums/anyone.lrc')
      .then((response) => response.text())
      .then(async (data: any) => {
        // console.log('LRC file content:', data);
        const lines = await data.split('\n');
        const parsedLyrics: any = await lines.map((line: string, index: number) => {
          // console.log(" in map line --- " , line , index)
          let [time, text] = line.split(']');
          time = time.substring(1);
          const timeComponents = time.split(':');
          const minutes = parseInt(timeComponents[0], 10);
          const seconds = parseFloat(timeComponents[1]);

          if (!isNaN(minutes) && !isNaN(seconds)) {
            const totalSeconds = minutes * 60 + seconds;
            return { time: totalSeconds, text: text.trim() };
          } else {
            console.warn(`Invalid time format at line ${index + 1}: ${time}`);
            return null;
          }
        }).filter(Boolean);
        console.log('Parsed lyrics:', parsedLyrics);
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

  const getCurrentLyric = () => {
    return lyrics.find((lyric: any) => lyric.time > currentTime) || { text: '' };
  };

  return (
    <div className="text-2xl text-white">
      <div>
        {
          lyrics.map((item: any) => {
            if (item.text == getCurrentLyric().text) {
              return (
                <p className="bg-pink-700" >{item.text}</p>
              )
            } else {
              return (
                <p  >{item.text}</p>
              )
            }
          })
        }
      </div>
    </div>
  );

};
export default Content;