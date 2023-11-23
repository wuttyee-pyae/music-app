
import BrowseArtists from "@/components/desktop/artist/BrowseArtists";
import Recommended from "@/components/desktop/artist/Recommended";
import getArtistsData from '@/lib/artists';
import React, { useState } from 'react';

export default async function Artist() {
  const localData = await getArtistsData()
  
  return (
    <div className="">
      {/* <p>Data from Child: {dataFromChild}</p> */}
        <Recommended data={localData} />
        <BrowseArtists />
    </div>
  );
}
