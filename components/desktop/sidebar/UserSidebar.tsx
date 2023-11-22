import CardSidebar from "./CardSidebar";
import UserbarLink from "./UserbarLink";


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
