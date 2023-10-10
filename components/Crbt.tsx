import React from "react";
import Image from "next/image";
import CrbtBanner from "./crbt/banner";
import CrbtTag from "./crbt/tag";
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
