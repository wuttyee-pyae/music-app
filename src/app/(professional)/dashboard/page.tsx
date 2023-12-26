"use client";
import CardBox from "@/components/dashboard/nav/card/CardBox";
import Artistscover from "@/components/dashboard/nav/cover_banner/Artistscover";
import { MusicIcon } from "@/components/mobile/nav/icons/MusicIcon";
import { VideoIcon } from "@/components/mobile/nav/icons/VideoIcon";
import { NavbarWrapper } from "@/components/dashboard/nav/NavbarWrapper";

import Link from "next/link";
import React, { useState } from "react";
import Footer from "@/components/dashboard/footer/Footer";
import FooterTab from "@/components/dashboard/footer/FooterTab";
import { TabPanel, TabView } from "primereact/tabview";


const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardReport = [
    {
      title: "Music",
      count: 20,
      color: "secondary",
      icon: <MusicIcon color="secondary" />,
      url: "/dashboard/reports/id",
    },
    {
      title: "MTV",
      count: 20,
      color: "success",
      icon: <VideoIcon color="success" />,
      url: "/dashboard/reports/id",
    },
    {
      title: "Collection",
      count: null,
      color: "danger",
      icon: <MusicIcon color="danger" />,
      url: "/dashboard/reports/id",
    },
  ];

  const cardAddQuick = [
    {
      title: "Music",
      count: 20,
      color: "secondary",
      icon: <MusicIcon color="secondary" />,
      url: "/dashboard/music",
    },
    {
      title: "MTV",
      count: 20,
      color: "success",
      icon: <VideoIcon color="success" />,
      url: "/dashboard/vedio",
    },
    {
      title: "Collection",
      count: null,
      color: "danger",
      icon: <MusicIcon color="danger" />,
      url: "/dashboard/collection",
    },
  ];

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index)
  }


  return (
    <div >
      <div className="sticky top-0 z-10">
      <NavbarWrapper />
      </div>
      
      <div className="h-[90vh]">
      <TabView activeIndex={activeIndex} onTabChange={(e: any) => setActiveIndex(e.index)} >
        <TabPanel >
          <div className="container mb-4">
            <Artistscover />

            <div className="mb-4 grid grid-cols-2 items-center gap-4">
              <div className="flex items-center gap-4">
                <h3 className="title text-white">Real Time</h3>
                <p className="text-gray-300">24hr</p>
              </div>
              <div className="flex justify-end text-gray-300">More</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              {cardReport.map((item: {}, index: number) => (
                <CardBox key={index} data={item} status="time" />
              ))}
            </div>


            <div className="mb-4 grid grid-cols-2 items-center gap-4">
              <div className="flex items-center gap-4">
                <h3 className="title text-white ">Quick Add</h3>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {cardAddQuick.map((item: any, index: number) => (
                <CardBox key={index} data={item} status="quick" Icon={item.icon} />
              ))}
            </div>

          </div>
        </TabPanel>
        <TabPanel >
          <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
        <TabPanel >
          <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
        <TabPanel >
          <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
      </TabView>
      </div>
      <FooterTab handleActiveIndex={handleActiveIndex} />
      
    </div>
  );
};

export default Dashboard;
