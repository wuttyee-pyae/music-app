import CardSidebar from "./CardSidebar";
import Image from "next/image";
import logo from "@/assets/icons/web-logo.png";
import SidebarLink from "./SidebarLink";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import LogoIcon from "@/components/icons/LogoIcon";
import MusicIcon from "@/components/icons/MusicIcon";
import ArtistIcon from "@/components/icons/ArtistIcon";

const links = [
  { id:1 , label: "Home", icon: "LogoIcon", link: "home" },
  { id:2 , label: "Music", icon: "MusicIcon", link: "music" },
  { id:3 , label: "Artists", icon: "ArtistIcon", link: "artists" },
  // { label: "My Playlist", icon: "FaUserPen", link: "/palylist" },
  // { label: "My Profile", icon: "FaUserPen", link: "/profile" },
  // { label: "My Playlist", icon: "FiMusic", link: "/playlist" },
  // { label: "Services", icon: "FiMusic", link: "/services" },
  // { label: "FAQ", icon: "FiMusic", link: "/FAQ" },
  // { label: "Contact Us", icon: "FiMusic", link: "/contactus" },
  // { label: "Feedback", icon: "FiMusic", link: "/feedback" },
];

const Sidebar = () => {
  
  return (
      <CardSidebar className="sidebar-card mb-2">
        {links.map((link) => (
          <SidebarLink link={link} key={link.id} />
        ))}
      </CardSidebar>
  );
};

export default Sidebar;
