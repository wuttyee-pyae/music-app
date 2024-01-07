"use client";

import React, { useEffect, useState } from "react";
import FooterTab from "@/components/dashboard/footer/FooterTab";
import { TabPanel, TabView } from "primereact/tabview";

import Music from "@/components/dashboard/music/Music";
import Mtv from "@/components/dashboard/mtv/Mtv";
import Home from "@/components/dashboard/home/home";
import Report from "@/components/dashboard/report/report";
import { useDispatch } from "react-redux";
import useStorage from "@/hooks/useStorage";
import { setAuth, setToken } from "../../../../redux/features/appSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const localStorage = useStorage()
  const checkStorage = async () => {
    const isLogin = await localStorage.getItem("user-data", "local") || null
    const isToken = await localStorage.getItem("token", "local") || null
    isLogin ? await dispatch(setAuth(true)) : null
    isToken ? await dispatch(setToken(isToken)) : null
  }
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  // useEffect( () =>  {
  //    checkStorage();
  // })
  

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
