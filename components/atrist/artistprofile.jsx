"use client";
import React from "react";
import Image from "next/image";

import Breadcrumb from "@/components/atrist/Breadcrumb";

import ArtistProfileImg from "@/assets/artists/big_bag/about_image/profile_img.jpg";

import ShuffPlayIcon from "./ShufffPlay";
import ArtistMoreIcon from "./ArtistsMoreIcon";
import FollowBtn from "./FollowBtn";
import PopularSong from "./PopularSong";

// import styles from "./ArtistsCover.module.css";
import styles from "./ArtistProfile.module.css";

import PopularMusic from "@/components/atrist/PopularMusic";

import PoopularSoungList from './PoopularSoungList';
import Albumcover from "./albums/AlbumCover"

import Crbtitems from '@/components/crbt/Crbtitems';
import VideoList from './video/videolist';
// import { columns, users, statusOptions, accessToken } from "./data";


import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

export default function ArtistProfile() {
  const variants = ["underlined"];
  const [selected, setSelected] = React.useState("overview");
  let tabs = [
    {
      id: "overview",
      label: "Overview",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "about",
      label: "About",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "videos",
      label: "Videos",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "crbt",
      label: "CRBT",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="relative">
      <div className={styles.artist_area}>
        <div className="grid grid-cols-12 gap-4 mx-4 items-center">
          <div className="col-span-2">
            <div id="artists_id">
              <Image
                className="rounded-lg shadow-lg mb-4"
                alt="..."
                src={ArtistProfileImg}
                style={{ objectFit: "cover" }}
                // layout="responsive"
                suppressHydrationWarning
              />
            </div>
          </div>
          <div className="col-span-7">
            <div className="grid grid-flow-row auto-rows-max justify-between">
              <div>
                <Breadcrumb />
              </div>
              <div className="flex flex-wrap gap-4 items-center py-4">
                <div>
                  <p className="artist_name lg:text-5xl md:text-3xl sm:text-4xl">Big Bag</p>
                </div>
                <div>
                  <FollowBtn />
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {variants.map((variant) => (
                  <Tabs
                    key={variant}
                    variant={variant}
                    aria-label="Options"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                    items={tabs}
                  >
                    {/* Get Overview data place tab */}
                    <Tab key="overview" title="Overview">
                      <div className="tabs py-10 pb-36">
                        <div className="flex flex-col pb-32 mb-36">
                          <p className="text-lg text-white mb-4">Popular songs</p>
                          <PoopularSoungList/>
                          <PoopularSoungList/>
                          <Albumcover/>
                        </div>
                      </div>
                    </Tab>

                    {/* Get About data place tab */}
                    <Tab key="about" title="About">
                      <div className="tabs py-10">
                        <div className="flex flex-col gap-4 pb-32 mb-36">
                        <p className="text-lg text-white mb-4">About</p>
                        </div>
                      </div>
                    </Tab>

                    {/* Get Videos data place tab */}
                    <Tab key="videos" title="Videos">
                      <div className="tabs py-10">
                        <div className="flex flex-col gap-4 pb-32 mb-36">
                        <p className="text-lg text-white mb-4">MTV Music</p>
                          <VideoList />
                        </div>
                      </div>
                    </Tab>

                    {/* Get CRBT data place tab */}
                    <Tab key="crbt" title="CRBT">
                      <div className="tabs py-10">
                        <div className="flex flex-col pb-32 mb-36">
                        <p className="text-lg text-white mb-4">CRBT</p>
                          <Crbtitems />
                          <Crbtitems />
                          <Crbtitems />
                          <Crbtitems />
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="grid grid-flow-row auto-rows-max">
              <div className="grid grid-flow-col gap-8 auto-cols-max justify-end items-center">
                <div>
                  <ShuffPlayIcon />
                </div>
                <div>
                  <ArtistMoreIcon />
                </div>
              </div>

              <div className="grid grid-flow-col justify-end">
                <p className={styles.follower_count}>490,451 Followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
