import CardSidebar from "./CardSidebar";
import SidebarLink from "./SidebarLink";


const links = [
  { id:1 , label: "Home", icon: "LogoIcon", link: "/home" },
  { id:2 , label: "Music", icon: "MusicIcon", link: "/music" },
  { id:3 , label: "Artists", icon: "ArtistIcon", link: "/artists" },
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
