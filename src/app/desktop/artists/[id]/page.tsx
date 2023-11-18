import React from "react";
import { Card, CardFooter, Button } from "@nextui-org/react";
import Artistscover from "@/components/desktop/atrist/ArtistsCover";
import ArtistProfile from "@/components/desktop/atrist/ArtistProfile";
import { getArtistsDataById } from '@/lib/artists';

export default async function ArtistId() {
  const localData = await getArtistsDataById(1)
  return (
    <div className="drop-shadow-xl">
      <div className="">
        <div>
        <Artistscover />
        </div>
        <div>
        <ArtistProfile data={localData} />
        </div>
      </div>
    </div>
  );
}