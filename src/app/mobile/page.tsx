"use client";
import React, { useEffect, useState } from "react";
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
import MusicCard from "@/components/mobile/musiccard/MusicCard";
import ViewAll from "@/components/mobile/musiccard/ViewAll";
import ArtistCart from "@/components/mobile/artistcard/ArtistCart";
import useScrollDirection from "@/hooks/scrollDirection";
import MoodCard from "@/components/mobile/musiccard/MoodCard";
import CrbtList from "../../../components/mobile/crbt/CrbtList";
import CrbtItem from "@/components/mobile/crbt/CrbtItem";
import MtvCard from "@/components/mobile/mtv/MtvCard";

export default function Mobile({}) {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <div
        className={` scroll-sticky  ${
          scrollDirection === "down" ? "hide-sticky" : "show"
        } `}
      >
        <NavbarWrapper />
      </div>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          variant="underlined"
          className={`scroll-sticky ${
            scrollDirection === "down" ? "hide" : "show"
          } scroll-top-tab`}
          classNames={{
            tabList:
              "w-full relative justify-evenly rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#8C52FF]",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-[#fff]",
          }}
        >
          <Tab key="home" title={<HomeIcon/>}>
            <Banner />
            <div className="m-4">
              <div className="flex row my-2 gap-2 items-center">
                <h3 className="title text-white font-bold">Top Charts</h3>
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

              <div className="flex">
                <div className="flex-auto w-64">
                  <h3 className="title text-white font-bold py-4">
                    New releases for you
                  </h3>
                </div>
                <div className="flex-auto w-32 flex justify-end items-center">
                  <ViewAll />
                </div>
              </div>
              <MusicCard />

              <div className="flex">
                <div className="flex-auto w-64">
                  <h3 className="title text-white font-bold py-4">
                    Top Artists{" "}
                  </h3>
                </div>
                <div className="flex-auto w-32 flex justify-end items-center">
                  <ViewAll />
                </div>
              </div>
              <ArtistCart />

              <div className="flex">
                <div className="flex-auto w-64">
                  <h3 className="title text-white font-bold py-4">Mood </h3>
                </div>
                <div className="flex-auto w-32 flex justify-end items-center">
                  <ViewAll />
                </div>
              </div>
              <MoodCard />

              <div className="flex">
                <div className="flex-auto w-64">
                  <h3 className="title text-white font-bold py-4">
                    Recommended Ringtunes
                  </h3>
                </div>
                <div className="flex-auto w-32 flex justify-end items-center">
                  <ViewAll />
                </div>
              </div>
              <MusicCard />

              <div className="flex">
                <div className="flex-auto w-64">
                  <h3 className="title text-white font-bold py-4">
                    Top 10 Ringtunes
                  </h3>
                </div>
                <div className="flex-auto w-32 flex justify-end items-center">
                  <ViewAll />
                </div>
              </div>
              <CrbtList />
              <CrbtItem />
              <CrbtItem />

              <div className="flex">
                <div className="flex-auto w-64">
                  <h3 className="title text-white font-bold py-4">
                    MTV Music
                  </h3>
                </div>
                <div className="flex-auto w-32 flex justify-end items-center">
                  <ViewAll />
                </div>
              </div>
              <MtvCard/>
              
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
          <Tab key="artist" title={<ArtistIcon size={20} />}>
            <Card>
              <CardBody>
                Artist Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="crbt" title={<CrbtIcon />}>
            <Card>
              <CardBody>
                CRBT Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
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
                User Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
