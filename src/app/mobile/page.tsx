"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { HomeIcon } from "@/components/mobile/nav/icons/HomeIcon";
import { MusicIcon } from "@/components/mobile/nav/icons/MusicIcon";
import { ArtistIcon } from "@/components/mobile/nav/icons/ArtistIcon";
import { CrbtIcon } from "@/components/mobile/nav/icons/CrbtIcon";
import { VideoIcon } from "@/components/mobile/nav/icons/VideoIcon";
import { UserIcon } from "@/components/mobile/nav/icons/UserIcon";
import Banner from "@/components/mobile/banner/Banner";
import { NavbarWrapper } from "@/components/mobile/nav/NavbarWrapper";
import TopChart from "@/components/mobile/topchart/TopChart";

export default function Mobile({}) {
  console.log("MOBILE page");
  return (
    <div className="flex w-full flex-col relative">
      <NavbarWrapper />
      <Tabs
        aria-label="Options"
        variant="underlined"
        className="bg-gray"
        classNames={{
          tabList:
            "w-full relative justify-evenly rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#8C52FF]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#fff]",
        }}
      >
        <Tab key="home" title={<HomeIcon />}>
          <Banner />
          <div className="m-4">
            <div className="flex row gap-2 items-center">
              <h3 className="text-white font-bold">Top Charts</h3>
              <span className="foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.824"
                  height="14.82"
                  viewBox="0 0 8.824 14.82"
                >
                  <path
                    d="M6379-271.7l6.7,6.7,6.7-6.7"
                    transform="translate(272.41 6393.113) rotate(-90)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </div>

            <TopChart />
            <TopChart />
          </div>
        </Tab>
        <Tab key="music" title={<MusicIcon />}>
          <Card>
            <CardBody>
              Music Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="artist" title={<ArtistIcon />}>
          <Card>
            <CardBody>
              Artist Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="crbt" title={<CrbtIcon />}>
          <Card>
            <CardBody>
              CRBT Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title={<VideoIcon />}>
          <Card>
            <CardBody>
              Videos Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="user" title={<UserIcon />}>
          <Card>
            <CardBody>
              User Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
