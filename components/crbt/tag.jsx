"use client";

// import React from "react";
// import { useState } from "react";
// import { Button } from "@nextui-org/react";

import ButtonTag from "./buttontag";

export default function CrbtTag() {
  const handleOnCrbtTagClick = () => {
    console.log("hi this is crbt tag item");
  };

  return (
    <div className="mx-4 mb-4">
        <div className="flex">
          <ButtonTag
            buttonText="Top Ten"
            handleOnClick={handleOnCrbtTagClick}
          />
          
      </div>
    </div>
  );
}
