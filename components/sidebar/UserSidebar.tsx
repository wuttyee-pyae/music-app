import CardSidebar from "./CardSidebar";
import Image from "next/image";
import logo from "@/assets/icons/web-logo.png";
import UserbarLink from "./UserbarLink";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import LogoIcon from "@/components/icons/LogoIcon";
import MusicIcon from "@/components/icons/MusicIcon";
import ArtistIcon from "@/components/icons/ArtistIcon";

const links = [
  { label: "My Profile", icon: "UserIcon", link: "/profile" },
  { label: "Playlist", icon: "PlaylistIcon", link: "/playlist" },
];

const UserSidebar = () => {
  return (
      <CardSidebar className="sidebar-card mb-2">
        {links.map((link) => (
          <UserbarLink link={link} key={link.label} />
        ))}
      </CardSidebar>  
  );
};

export default UserSidebar;
