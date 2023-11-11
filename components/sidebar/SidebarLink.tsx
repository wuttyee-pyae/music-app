"use client";
import Link from "next/link";
import { FiMusic } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { FaUserPen } from "react-icons/fa6";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import LogoIcon from "@/components/icons/LogoIcon";
import MusicIcon from "@/components/icons/MusicIcon";
import ArtistIcon from "@/components/icons/ArtistIcon";

const icons = { Settings, User, Grid, Calendar, LogoIcon, MusicIcon, ArtistIcon, FiMusic, BiUser, FaUserPen,};

const SidebarLink = ({ link  } :any) => {
  const pathname = usePathname();
  let isActive = false; 

  if (pathname === link.link) {
    isActive = true;
  }

  const Icon = icons[link.icon];
  return (
    <Link href={link.link} key ={link.id} className="flex justify-start items-start py-4 menu-link px-2" passHref>
      <Icon
        size={25}
        className={clsx(
          "menu-icon stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600 active"
        )}
      />
      <span className="ml-2 menu-name self-center menu-name">{link.label}</span>
    </Link>
  );
};

export default SidebarLink;
