import React from "react";
import { Card, CardFooter, Button } from "@nextui-org/react";
import Artistscover from "@/components/desktop/atrist/ArtistsCover";
import ArtistProfile from "@/components/desktop/atrist/ArtistProfile";
import { getArtistsDataById } from "@/lib/artists";

export default async function ArtistId({ params }: { params: { id: number } }) {
  const artist = await getArtistsDataById(params.id)
  return (
    <div className="drop-shadow-xl">
        <div>
        <Artistscover />
        </div>
        <div>
        <ArtistProfile data={artist} />
        </div>
      </div>
  );
}