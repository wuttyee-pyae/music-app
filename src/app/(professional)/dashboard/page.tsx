"use client";

import React, { useState } from "react";
import FooterTab from "@/components/dashboard/footer/FooterTab";
import { TabPanel, TabView } from "primereact/tabview";


import Music from "@/components/dashboard/music/Music";
import Home from "@/components/dashboard/home/Home";

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="">
        <TabView
          activeIndex={activeIndex}
          onTabChange={(e: any) => setActiveIndex(e.index)}
        >
          <TabPanel>
            <Home />
          </TabPanel>
          <TabPanel>
            <Music />
          </TabPanel>
          <TabPanel>
            <p className="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </TabPanel>
        </TabView>
      </div>
      <FooterTab handleActiveIndex={handleActiveIndex} />
    </div>
  );
};

export default Dashboard;
