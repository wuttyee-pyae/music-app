import { createSlice } from '@reduxjs/toolkit';
import useStorage from "@/hooks/useStorage";

const initialState = {
  songList: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
  currentTimer:0
};
const storage = useStorage();

const playMusicSlice = createSlice({
  name: 'musicplay',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload;
      state.currentIndex = action.payload?.id;
      state.isActive = true;
      storage.setItem('play-music',action.payload , 'session')
    },

    nextSong: (state, action) => {
        state.activeSong = state.songList[action.payload];

      state.currentIndex = state.activeSong.id;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      state.activeSong = state.songList[action.payload];
      state.currentIndex = state.activeSong.id;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
      console.log(state.isPlaying)
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },

    setSongLists: (state, action) => {
      const updatedList = action.payload?.map((item) => {
          if (item.id == state.activeSong?.id && item.name == state.activeSong?.name && item.picture == state.activeSong?.picture)
            return { ...item, isPlaying: true }
          else
            return { ...item, isPlaying: false }
        })
        state.songList = updatedList
    },

    setCurrentTimer: (state, action) => {
      state.currentTimer = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId, setSongLists, setCurrentTimer } = playMusicSlice.actions;

export default playMusicSlice.reducer;
