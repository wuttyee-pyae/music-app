import React from "react";
import { MenuItem } from "@nextui-org/react";

import { HomeIcon } from "@/components/mobile/nav/icons/HomeIcon";
import { MusicIcon } from "@/components/mobile/nav/icons/MusicIcon";
import { VideoIcon } from "@/components/mobile/nav/icons/VideoIcon";
import { ReportIcon } from "@/components/desktop/icons/ReportIcon";
import Link from "next/link";


const Footer = () => {
  const navLink = [
    {
      title: "Home",
      icon: <HomeIcon color="default" />,
      url: "/dashboard",
    },
    {
      title: "MTV",
      icon: <VideoIcon color="default" />,
      url: "/dashboard/video",
    },
    {
      title: "Collection",
      icon: <MusicIcon color="default" />,
      url: "/dashboard/music",
    },
    {
      title: "Gallery",
      icon: <MusicIcon color="default" />,
      url: "/dashboard/Gallery",
    },
    {
      title: "Report",
      icon: <ReportIcon color="default" />,
      url: "/dashboard/report",
    },
  ];

  return (
    <div className="">
      <footer className="rounded-md footer-container fixed-bottom only-top">
        <div className="p-4 flex gap-4 items-center z-10">

          <div className="">
            {navLink.map((item, index) => (
              <Link key={index} href={{ pathname: item.url, query: {data:item} }}>
              <p>hello</p>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
