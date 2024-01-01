"use client";
import React, { useState } from "react";
import { NavbarWrapper } from "@/components/dashboard/nav/NavbarWrapper";
import LineChart from "../home/LineChart";


const Report = () => {

  return (
    <>
      <div className="sticky bg-main top-0 z-10">
        <NavbarWrapper />
      </div>
      <div className="container mb-4 mt-4">
        <div className="mb-4 grid grid-cols-2 items-center gap-4">
          <div className="flex items-center gap-4">
            <h3 className="title text-white ">Line Chart</h3>
          </div>
        </div>
        <div>
          <LineChart/>
        </div>
      </div>
    </>
  );
};

export default Report;
