import React from "react";
import Artistscover from "@/components/desktop/artist/ArtistsCover";
import ArtistProfile from "@/components/desktop/artist/ArtistProfile";
import { getArtistsDataById } from "@/lib/artists";

export default async function ArtistId({ params }: { params: { id: number } }) {
  const artist = await getArtistsDataById(params.id)
  return (
    <div className="">
        <Artistscover />
        <ArtistProfile data={artist} />
      </div>
  );
}