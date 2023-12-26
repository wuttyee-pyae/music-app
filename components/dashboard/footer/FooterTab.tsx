import { ReportIcon } from "@/components/desktop/icons/ReportIcon";
import { PlusIcon } from "@/components/desktop/music/icons/PlusIcon";
import { CloseFilledIcon } from "@/components/desktop/nav/icons/CloseFilledIcon";
import { HomeIcon } from "@/components/mobile/nav/icons/HomeIcon";
import { MusicIcon } from "@/components/mobile/nav/icons/MusicIcon";
import { VideoIcon } from "@/components/mobile/nav/icons/VideoIcon";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import React from "react";

const FooterTab = ({handleActiveIndex}:{handleActiveIndex: any}) => {
  // const artist = props.data;
  const variants = ["underlined"];
  const [selected, setSelected] = React.useState("overview");
  const [index, setIndex] = React.useState(0);
  let tabs = [
    {
      tabIndex: 0,
      id: "home",
      title: "Home",
      icon: <HomeIcon color="default" />,
      url: "/dashboard",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      tabIndex: 1,
      id: "music",
      title: "Music",
      icon: <MusicIcon color="default" />,
      url: "/dashboard/music",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  {
      tabIndex: 2,
      id: "mtv",
      title: "MTV",
      icon: <VideoIcon color="default" />,
      url: "/dashboard/video",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    // {
    //   id: "collection",
    //   title: "Collection",
    //   icon: <CloseFilledIcon color="default" />,
    //   url: "/dashboard/music",
    //   content:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // },
    // {
    //   id: "gallery",
    //   title: "Gallery",
    //   icon: <PlusIcon color="default" />,
    //   url: "/dashboard/Gallery",
    //   content:
    //     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    // },
    {
      tabIndex: 3,
      id: "report",
      title: "Report",
      icon: <ReportIcon color="default" />,
      url: "/dashboard/report",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <footer
      className="rounded-md footer-container sticky bottom-0" >
      <div className="py-2 flex items-center z-10">
        <div className="flex w-full flex-col">
          <Tabs
            aria-label="Dynamic tabs"
            items={tabs}
            className={"block w-full justify-between"}
            color="default"
            variant="underlined"
            selectedKey={selected}
            onSelectionChange={setSelected as any}
          >
            {(item) => (
              <Tab
                key={item.id}
                title={
                  <div className="flex flex-col justify-center items-center" onClick={() => handleActiveIndex(item.tabIndex)}>
                    {item.icon}
                    <span className="boder_line">{item.title}</span>
                  </div>
                }
              >
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </footer>
  );
};

export default FooterTab;
