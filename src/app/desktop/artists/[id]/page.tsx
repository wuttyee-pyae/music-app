import React from "react";
import Image from "next/image";

import { Card, CardFooter, Button } from "@nextui-org/react";
import Artistscover from "@/components/desktop/atrist/ArtistsCover";
import ArtistProfile from "@/components/desktop/atrist/ArtistProfile";


export default function ArtistId() {
  return (
    <div className="drop-shadow-xl">
      <div className="">
        <div>
        <Artistscover />
        </div>
        <div>
        <ArtistProfile />
        </div>
      </div>
    </div>
  );
}