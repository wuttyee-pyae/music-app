import CardSidebar from "./CardSidebar";
import Image from "next/image";
import logo from "@/assets/icons/web-logo.png";
import UserbarLink from "./UserbarLink";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import LogoIcon from "@/components/desktop/icons/LogoIcon";
import MusicIcon from "@/components/desktop/icons/MusicIcon";
import ArtistIcon from "@/components/desktop/icons/ArtistIcon";

const links = [
  { id: 1 , label: "My Profile", icon: "UserIcon", link: "/profile" },
  { id :2 ,label: "Playlist", icon: "PlaylistIcon", link: "/playlist" },
];

const UserSidebar = () => {
  return (
      <CardSidebar className="sidebar-card mb-2">
        {links.map((link) => (
          <UserbarLink link={link} key={link.id} />
        ))}
      </CardSidebar>  
  );
};

export default UserSidebar;
