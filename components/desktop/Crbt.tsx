import React from "react";
import Image from "next/image";
import CrbtBanner from "./crbt/Banner";
import CrbtTag from "./crbt/CrbtTag";
import Crbtlist from "./crbt/Crbtlist";


export default function Crbt({ }) {
  return (
      <div className="mb-4">
        <CrbtBanner />
        <CrbtTag />
        <Crbtlist />
      </div>
  );
}
