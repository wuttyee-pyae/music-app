// pages/_app.js
import {NextUIProvider} from '@nextui-org/react'
// import getAccessToken from '@/pages/api/spotify';
import { useSelector } from 'react-redux';
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';

import { Route, Routes } from 'react-router-dom';


function MyApp({ Component, pageProps }) {
  const { activeSong } = useSelector((state) => state.player);
  getAccessToken();
  
  return (
    <div>
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    
       {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  )
}

export default MyApp;