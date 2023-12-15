import React from "react";
import { UserIcon } from "@/components/mobile/nav/icons/UserIcon";
import { Sidebar } from 'primereact/sidebar';
import Image from "next/image";

// import component 👇
// import Drawer from "react-modern-drawer";

//import styles 👇
// import "react-modern-drawer/dist/index.css";
import UserSidebar from "@/components/desktop/sidebar/UserSidebar";
import Artistscover from "./cover_banner/Artistscover";

const DrawerMenu = () => {
  const [visible, setVisible] = React.useState(false);
  const toggleDrawer = () => {
    setVisible((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer}>
        <UserIcon />
      </button>
      <Sidebar visible={visible} onHide={() => setVisible(false)} >
        <div className="sidebar sidebar-dark left-bar menuber text-white">
          <div className="flex items-center m-2">
            {/* <div> */}
              <UserIcon onClick={toggleDrawer} className="m-2" />
            {/* </div> */}
            <div>
              <a
                className="navbar-brand"
                href="#"
                target="_self"
                rel="noopener noreferrer"
              >
                <Image
                  className="relative mt-2"
                  src="/mobile-logo.png"
                  alt="Logo"
                  width={136}
                  height={30}
                  priority
                />
              </a>
            </div>
          </div>

          {/* <div className="cover">
          <Artistscover />
          </div> */}
          <UserSidebar />
        </div>
      </Sidebar>
    </>
  );
};

export default DrawerMenu;
