"use client";

import React, { useState } from "react";
import FooterTab from "@/components/dashboard/footer/FooterTab";
import { TabPanel, TabView } from "primereact/tabview";

import Music from "@/components/dashboard/music/Music";
import Mtv from "@/components/dashboard/mtv/Mtv";
import Home from "@/components/dashboard/home/home";
import Report from "@/components/dashboard/report/report";

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div>
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
            <Mtv />
          </TabPanel>
          <TabPanel>
            <Report />
          </TabPanel>
        </TabView>
      </div>
      <FooterTab handleActiveIndex={handleActiveIndex} />
    </div>
  );
};

export default Dashboard;
