import React from "react";
import { Tabs, Tab, Link } from "@nextui-org/react";
import MyButton from "@/components/desktop/login/MyButton";
import { PlusIcon } from "@/components/desktop/artist/PlusIcon";
import VideoCard from "./VideoCard";
import AlblumMtvList from "./AlblumMtvList";

export default function Mtv() {

const videoList = [
    {
      "id": 1,
      "name": "Chan Khae",
      "picture": "/artists/idiots/mtv/chan_khae/cover.jpg",
      "type": "rock",
      "singer": "IDIOTS",
      "viewer": 601910209,
      "liked": false
    },
    {
      "id": 2,
      "name": "Min Nae Nnee Phot",
      "picture": "/artists/idiots/mtv/min_nae_nee_phot/cover.jpg",
      "type": "rock",
      "singer": "IDIOTS",
      "viewer": 5623451858,
      "liked": false
    },
    {
      "id": 3,
      "name": "Nga Bawa Pyan You",
      "picture": "/artists/idiots/mtv/nga_bawa_pyan_you/cover.jpg",
      "type": "rock",
      "singer": "IDIOTS",
      "viewer": 2496513560,
      "liked": false
    },
    {
      "id": 4,
      "name": "Su Taung",
      "picture": "/artists/idiots/mtv/su_taung/cover.jpg",
      "type": "rock",
      "singer": "IDIOTS",
      "viewer": 4668096891,
      "liked": false
    },
    {
      "id": 5,
      "name": "Tar Ggyi Doh Aye Say",
      "picture": "/artists/idiots/mtv/tar_gyi_doh_aye_say/cover.jpg",
      "type": "rock",
      "singer": "IDIOTS",
      "viewer": 1761150809,
      "liked": false
    }
  ];

  const mtvAlbumList = [
    {
      "id": 1,
      "album_name": "Khit Thit Kyaut",
      "cover_image": "/artists/idiots/mtv/chan_khae/cover.jpg",
      "date": "Thu Jan 13 2016 05:14:52 GMT+0630 (Myanmar Time)",
      "songs": [
        {
          "id": 1,
          "name": "Lu Ah",
          "picture": "/artists/idiots/albums/cover.jpeg",
          "type": "rock",
          "singer": "IDIOTS",
          "viewer": 4679638590,
          "liked": false
        },
        {
          "id": 2,
          "name": "Distortion",
          "picture": "/artists/idiots/albums/cover.jpeg",
          "type": "rock",
          "singer": "IDIOTS",
          "viewer": 4430502035,
          "liked": false
        },
        {
          "id": 3,
          "name": "D Lo Pal",
          "picture": "/artists/idiots/albums/cover.jpeg",
          "type": "rock",
          "singer": "IDIOTS",
          "viewer": 629328751,
          "liked": false
        },
        {
          "id": 4,
          "name": "Ma Lo Top Bu",
          "picture": "/artists/idiots/albums/cover.jpeg",
          "type": "rock",
          "singer": "IDIOTS",
          "viewer": 1838408229,
          "liked": false
        },
        {
          "id": 5,
          "name": "Tu Ye Kaung",
          "picture": "/artists/idiots/albums/cover.jpeg",
          "type": "rock",
          "singer": "IDIOTS",
          "viewer": 7948584028,
          "liked": false
        }
      ]
    }
]


  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        color="default"
        variant="underlined"
        className="sticky top-0 z-50"
      >
        <Tab key="solo_mtv" title="Solo" className="boder_line text-2xl my-4">
          <div className="container my-4">
            <div
              className="mx-auto mb-4 sticky z-10 flex justify-center"
              style={{ top: "4rem" }}
            >
              <div className="w-52">
                <Link href="/dashboard/music">
                  <MyButton isDisabled={false} startContent={<PlusIcon />}>
                    Create Solo MTV
                  </MyButton>
                </Link>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 my-4">
                {videoList.map((data, index) => (
                  <VideoCard key={index} data={data} />
                ))}
              </div>
            </div>
          </div>
        </Tab>
        <Tab key="albums" title="Albums" className="boder_line text-2xl my-4">
          <div className="container my4">
            <div className="container my-4">
              <div
                className="mx-auto mb-4 sticky z-10 flex justify-center"
                style={{ top: "4rem" }}
              >
                <div className="w-52">
                  <Link href="/dashboard/music">
                    <MyButton isDisabled={false} startContent={<PlusIcon />}>
                      Create Albums
                    </MyButton>
                  </Link>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-3 z-0">
                  {mtvAlbumList.map((data, index) => (
                    <AlblumMtvList key={index} data={data} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
