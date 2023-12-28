import React from "react";
import { Tabs, Tab, ScrollShadow } from "@nextui-org/react";
import MyButton from "@/components/desktop/login/MyButton";
import { PlusIcon } from "@/components/desktop/artist/PlusIcon";
import CardMusicList from "@/components/dashboard/music/CardMusicList";
import AlblumPlayList from "@/components/dashboard/music/AlblumPlayList";
import { number } from "yup";
import getArtistsData from "@/lib/artists";

export default function Music() {
  const [selected, setSelected] = React.useState("overview");

  let tabs = [
    {
      id: "solo",
      label: "Solo",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "albums",
      label: "Albums",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const songList = [
    {
      id: 1,
      name: "Chan Khae",
      picture: "/artists/idiots/albums/lu_ah_gita/cover.jpeg",
      audio: "/artists/idiots/albums/lu_ah_gita/chan_khae.mp3",
      type: "rock",
      singer: "IDIOTS",
      viewer: 5461573909,
      liked: false,
      isPlaying: false,
      lyric: "/artists/idiots/albums/lu_ah_gita/chan_khae.lrc",
    },
    {
      id: 2,
      name: "Min Nae Nee Phot",
      picture: "/artists/idiots/albums/lu_ah_gita/cover.jpeg",
      audio: "/artists/idiots/albums/lu_ah_gita/min_nae_nee_phot.mp3",
      type: "rock",
      singer: "IDIOTS",
      viewer: 8532542578,
      liked: false,
      isPlaying: false,
      lyric: "/artists/idiots/albums/lu_ah_gita/min_nae_nee_phot.lrc",
      time: "3:20",
    },
    {
      id: 3,
      name: "Su Latt",
      picture: "/artists/idiots/albums/lu_ah_gita/cover.jpeg",
      audio: "/artists/idiots/albums/lu_ah_gita/su_latt.mp3",
      type: "rock",
      singer: "IDIOTS",
      viewer: 2328831906,
      liked: false,
      isPlaying: false,
      time: "3:20",
    },
    {
      id: 4,
      name: "Bar Lo Nay Tahy Lae",
      picture: "/artists/idiots/albums/khit_thit_kyaut/cover.jpeg",
      audio: "/artists/idiots/albums/khit_thit_kyaut/bar_lo_nay_thay_lae.mp3",
      type: "rock",
      singer: "IDIOTS",
      viewer: 6083855100,
      liked: false,
      isPlaying: false,
      time: "3:20",
    },
    {
      id: 5,
      name: "Ma Lo Top Bu",
      picture: "/artists/idiots/albums/khit_thit_kyaut/cover.jpeg",
      audio: "/artists/idiots/albums/khit_thit_kyaut/ma_lo_top_bu.mp3",
      type: "rock",
      singer: "IDIOTS",
      viewer: 2537381817,
      liked: false,
      isPlaying: false,
      time: "3:20",
    },
  ];

  const albumList = [
    {
      id: 1,
      album_name: "Khit Thit Kyaut",
      cover_image: "/artists/idiots/albums/khit_thit_kyaut/cover.jpeg",
      date: "Thu Jan 13 2016 05:14:52 GMT+0630 (Myanmar Time)",
      songs: [
        {
          id: 1,
          name: "Lu Ah",
          picture: "/artists/idiots/albums/cover.jpeg",
          type: "rock",
          singer: "IDIOTS",
          viewer: 4679638590,
          liked: false,
        },
        {
          id: 2,
          name: "Distortion",
          picture: "/artists/idiots/albums/cover.jpeg",
          type: "rock",
          singer: "IDIOTS",
          viewer: 4430502035,
          liked: false,
        },
        {
          id: 3,
          name: "D Lo Pal",
          picture: "/artists/idiots/albums/cover.jpeg",
          type: "rock",
          singer: "IDIOTS",
          viewer: 629328751,
          liked: false,
        },
        {
          id: 4,
          name: "Ma Lo Top Bu",
          picture: "/artists/idiots/albums/cover.jpeg",
          type: "rock",
          singer: "IDIOTS",
          viewer: 1838408229,
          liked: false,
        },
        {
          id: 5,
          name: "Tu Ye Kaung",
          picture: "/artists/idiots/albums/cover.jpeg",
          type: "rock",
          singer: "IDIOTS",
          viewer: 7948584028,
          liked: false,
        },
      ],
    },
    {
      id: 2,
      album_name: "Mccray Buckner",
      date: "Sun Apr 13 1980 04:59:27 GMT+0630 (Myanmar Time)",
      cover_image: "/artists/idiots/albums/khit_thit_kyaut/cover.jpeg",
      songs: [
        {
          id: 1,
          name: "Olivia Carson",
          picture: "/artists/aung_htet/about_image/aung-htet.jpg",
          type: "pop",
          singer: "Douglas Olsen",
          viewer: 3670450976,
          liked: false,
        },
        {
          id: 2,
          name: "Anne Cardenas",
          picture: "/artists/aung_htet/about_image/aung-htet.jpg",
          type: "pop",
          singer: "Floyd Singleton",
          viewer: 4809808955,
          liked: false,
        },
        {
          id: 3,
          name: "Marlene Wilcox",
          picture: "/artists/aung_htet/about_image/aung-htet.jpg",
          type: "rock",
          singer: "Araceli Vincent",
          viewer: 1230749530,
          liked: false,
        },
        {
          id: 4,
          name: "Fuller Ballard",
          picture: "/artists/aung_htet/about_image/aung-htet.jpg",
          type: "pop",
          singer: "Burns Williams",
          viewer: 4960912871,
          liked: false,
        },
        {
          id: 5,
          name: "Dominguez Pratt",
          picture: "/artists/aung_htet/about_image/aung-htet.jpg",
          type: "jazz",
          singer: "Lynette Le",
          viewer: 3628040927,
          liked: false,
        },
      ],
    },
    {
      id: 3,
      album_name: "Enid Howell",
      date: "Tue Dec 28 2021 21:45:01 GMT+0630 (Myanmar Time)",
      cover_image: "/artists/idiots/albums/khit_thit_kyaut/cover.jpeg",
      songs: [
        {
          id: 1,
          name: "Brittany Alford",
          picture: "/artists/aung_htet/about_image/aung-htet.jpg",
          type: "rock",
          singer: "Alyson Sims",
          viewer: 1501433923,
          liked: false,
        },
        {
          id: 2,
          name: "Forbes Hicks",
          picture: "/artists/aung_htet/about_image/aung-htet.jpg",
          type: "pop",
          singer: "Corina Tillman",
          viewer: 2446034887,
          liked: false,
        },
        {
          id: 3,
          name: "Minnie Burton",
          picture: "/artists/aung_htet/about_image/aung-htet.jpg",
          type: "jazz",
          singer: "Vonda Stephens",
          viewer: 8806236100,
          liked: false,
        },
        {
          id: 4,
          name: "Schmidt Hines",
          picture: "/artists/aung_htet/about_image/aung-htet.jpg",
          type: "rock",
          singer: "Madelyn Madden",
          viewer: 1709604911,
          liked: false,
        },
        {
          id: 5,
          name: "Mccormick Sampson",
          picture: "/artists/aung_htet/about_image/aung-htet.jpg",
          type: "jazz",
          singer: "Trudy Pennington",
          viewer: 8091848609,
          liked: false,
        },
      ],
    },
  ];

  // console.log(albumList ,"MusicData");

  const onUpload = (val: any) => {
    console.log(val);
  };

  return (
    <div className="">
      <div className="flex w-full flex-col">
        <Tabs
          className="sticky top-0 z-50"
          aria-label="Dynamic tabs"
          items={tabs}
          color="default"
          variant="underlined"
          selectedKey={selected}
          onSelectionChange={setSelected as any}
        >
          {(item) => (
            <Tab
              className="mt-4"
              key={item.id}
              title={
                <div className="flex flex-col justify-center items-center">
                  <span className="boder_line text-2xl">{item.label}</span>
                </div>
              }
            >
              <div
                className="mx-auto mb-4 sticky z-10 flex justify-center"
                style={{ top: "4rem" }}
              >
                <div className="w-52">
                  <MyButton isDisabled={false} startContent={<PlusIcon />}>
                    {item.id == "solo" ? "Solo Music" : "Album Music"}
                  </MyButton>
                </div>
                
              </div>
              {/* <ScrollShadow className="w-[auto] h-[100dvh]"> */}
              <div className="container mb-4">
                {item.id == "solo" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 my-4">
                    {songList.map((data, index) => (
                      <CardMusicList key={index} data={data} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-3 z-0">
                    {albumList.map((data, index) => (
                      <AlblumPlayList key={index} data={data} />
                    ))}
                  </div>
                )}
              </div>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
}
