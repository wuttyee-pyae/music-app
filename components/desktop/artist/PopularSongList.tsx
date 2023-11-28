"use client";
import React, { useEffect, useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import Image from "next/image";
import styles from "./popularsongList.module.css";
import { Tooltip } from "@nextui-org/react";

import { Button, Progress } from "@nextui-org/react";
import { HeartIcon } from "@/components/desktop/music/icons/HeartIcon";
import MoreOption from "@/components/desktop/music/MoreOption";
import NowPlaying from "./NowPlaying";
import useStorage from "@/hooks/useStorage";
import { subscribeToActiveValue, updateValue } from '@/hooks/observableService';

import {
  playPause,
  setActiveSong,
  setSongLists
} from "../../../redux/features/playMusicSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PopularSongList(props: any) {
  const storage = useStorage();
  const dispatch = useDispatch();
  const { activeSong , songList } = useSelector((state : any) => state.musicplay);
  const [propsSongList, setPropsSongList] = React.useState(props?.data || null);
  const [playingSong, setPlayingSong] = useState<any>(storage.getItem('play-music', 'session') || null);
  const [favSongs, setFavSongs] = useState<any>(storage.getItem('fav-songs', 'local') || []);


  useEffect(() => {
    setPlayingSong(storage.getItem('play-music', 'session') || null)
    setFavSongs(storage.getItem('fav-songs', 'local') || [])
    dispatch(setActiveSong(playingSong))
    dispatch(setSongLists(propsSongList))

    // For Fav List from local storage
    if(favSongs && favSongs.length > 0){
      propsSongList.map((obj1:any )=>
        favSongs.some((obj2:any) => {
          if(obj1.id === obj2.id && obj1.name === obj2.name && obj1.picture === obj2.picture)
          obj1.liked = true
        })
        );
    }
  //   const getFavList  = storage.getItem('fav-songs', 'local')
  //  console.log("fav - list --- " , getFavList)

  const subscription = subscribeToActiveValue((value : any) => {
    dispatch(setSongLists(propsSongList))
    });
    
    return () => {
      subscription.unsubscribe();
    };
  }, [])

  const playMusic = async (data: any, index: number) => {
    const setData = storage.setItem('play-music', data, 'session');
    setPlayingSong(storage.getItem('play-music', 'session'))
    dispatch(playPause(true))
    updateValue(setData);
    const updateSongList = await songList.map((item: any, i: number) => {
      if (i == index) return { ...item, isPlaying: true }
      else return { ...item, isPlaying: false }
    })
    dispatch(setSongLists(updateSongList))
  }

  const handleFavouriteList = async (data: any, liked?: any) => {
    const updatedItems = await songList.map((item: any) => {
      if (item.id === data.id) return { ...item, liked: !liked };
      return item;
    });
    await setPropsSongList(updatedItems);

    const favList : any[] = [];
    await updatedItems.map((item: any) => {
      if (item.liked === true) favList.push(item) ;
    });
    favList.length > 0 ? storage.setItem('fav-songs',favList, 'local') : null
    
  };


  return (
    <>
      {
        songList.map((item: any, index: number) => (

          <Tooltip
            content={<BsPlayFill className="h-10 w-10 z-0" />}
            className="text-white music_hover"
            offset={0}
            placement="left"
            key={index}
            onClick={() => playMusic(item, index)}
          >
            <div className={styles.music_card}>
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3 md:col-span-1">
                  <div className="flex items-center gap-4">
                    <div className="ml-4">{index + 1} </div>
                    {
                      item.isPlaying ? <NowPlaying /> : null
                    }
                  </div>
                </div>
                <div className="mr-4 col-span-3 md:col-span-1">
                    <Image
                      src={item.picture}
                      width={58}
                      height={58}
                      alt="Picture of the author"
                      className="aspect-square right-0 rounded-md"
                    />
                </div>

                <div className="col-span-5 md:col-span-3">
                  <div>
                    <div className={styles.music_name}>{item.name}</div>
                  </div>
                </div>
                <div className="col-span-4 md:col-span-3">
                  <div className="flex gap-4">
                    <div className={styles.new_play_lable}>{item.singer}</div>
                    <div className={styles.music_type}>{item.type}</div>
                  </div>
                </div>
                <div className="col-span-3 md:col-span-2">
                  <div className={styles.news_item}>
                    <p className={styles.ctbt_id}>{item.viewer}</p>
                  </div>
                </div>
                <div className="col-span-9 md:col-span-2">
                  <div className="flex items-center justify-end mr-4">
                    <div className="mr-2">
                      <Tooltip
                        color="secondary"
                        showArrow={true}
                        placement="top"
                        className="secondary"
                        content={
                          <div className="px-1 py-2 w-max">
                            <div className="text-tiny text-center">
                              Like This Item {item.liked}
                            </div>
                          </div>
                        }
                      >

                        <Button
                          isIconOnly
                          className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 mt-4"
                          radius="full"
                          variant="light"
                          onPress={() => { handleFavouriteList(item, item.liked) }}
                        >

                          <HeartIcon
                            className={item.liked ? "[&>path]:stroke-transparent" : ""}
                            fill={item.liked ? '#ef2d62' : 'none'}
                          />
                        </Button>
                      </Tooltip>
                    </div>
                    <MoreOption />
                  </div>
                </div>
              </div>
            </div>
          </Tooltip>

        ))
      }

    </>

  )
}

