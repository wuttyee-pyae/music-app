import React from "react";

import { Card, CardFooter, Button } from "@nextui-org/react";
import Albumcover from "@/components/desktop/artist/albums/AlbumCover";


export default function ArtistAlbums() {
  return (
    <div className="drop-shadow-xl">
      <div className="">
        <Albumcover />
      </div>
    </div>
  );
}