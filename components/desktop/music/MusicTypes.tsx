"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Moods1 from "@/assets/music_images/moods/mood_card.png";
import Moods2 from "@/assets/music_images/moods/mood_card-1.png";
import Moods3 from "@/assets/music_images/moods/mood_card-2.png";
import Moods4 from "@/assets/music_images/moods/mood_card-3.png";
// import Moods5 from "@/assets/music_images/moods/mood_card-4.png";

import Genres1 from "@/assets/music_images/genres/genres_01.png";
import Genres2 from "@/assets/music_images/genres/genres_02.png";
import Genres3 from "@/assets/music_images/genres/genres_03.png";
import Genres4 from "@/assets/music_images/genres/genres_04.png";
import Genres5 from "@/assets/music_images/genres/genres_05.png";
import { getAllGenres, getAllMoods } from "../../../services/music.service";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function MusicTypes(props: any) {
  const [musicTypeList, setMusicTypeList] = useState<any>(null);
  const [title, setTitle] = useState<any>(props.title);
  // const data = getAllGenres('/genres').then(async (response : any)=>{
  //   console.log(" ---- " , response)
  //   return await response?.data || ''
  // })
  const genresList = [
    { title: "Hip Hop", image: Genres1 },
    { title: "Dance Electro", image: Genres2 },
    { title: "POP", image: Genres3 },
    { title: "Country", image: Genres4 },
    { title: "Rock", image: Genres5 },
  ];

  const moodsList = [
    { title: "Party", image: Moods1 },
    { title: "Chill", image: Moods2 },
    { title: "Worckout", image: Moods3 },
    { title: "Focus", image: Moods4 },
    // {title: 'Party', image : Moods5 },
  ];

  const param = useSearchParams()?.get('title')
  const [moodList, setMoodList] = useState<any>([{name: ''}])

  useEffect(() => {
    title == "Genres"
      ? setMusicTypeList(genresList)
      : setMusicTypeList(moodsList);

      const fetchData = async () => {
        const genreList = await getAllGenres()
        // const moodList = await getAllMoods()
        console.log(" ----  main result " ,genreList)
        setMoodList(genreList)
      }
      fetchData()
  }, []);

  return (
    <div className="mb-4">
      <div className="flex flex-row item-center">
        <h3 className="title mb-2">{title || param || ''}</h3>
        <Link  href={{ pathname :"/music/music_type" ,
        query:{title : props.title}
      }}>
        <p className="text-white justify-end items-end">View All</p>
        </Link>
        
      </div>

      <div className="grid grid-cols-3 gap-4 xl:grid-cols-5 md:grid-cols-4">
        {/* Loop Moods Id */}
        {musicTypeList?.map((item: any, index: number) => (
          <div id="moods_id" key={index}>
            <Link href={"/music/music_type/id"}>
              <Image
                alt="..."
                src={item.image}
                style={{ objectFit: "cover" }}
                // layout="responsive"
                className=""
                suppressHydrationWarning
              />
              <p>{moodList[0].name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
