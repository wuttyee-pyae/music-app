import React from "react";
import Image from "next/image";

import { Card, CardFooter, Button } from "@nextui-org/react";

import Albumcover from "@/components/atrist/albums/albumcover";

export default function ArtistAlbums() {
  return (
    <div className="drop-shadow-xl">
      <div className="">
        <Albumcover />
      </div>
    </div>
  );
}