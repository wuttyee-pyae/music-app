
import BrowseArtists from "@/components/desktop/artist/BrowseArtists";
import Recommended from "@/components/desktop/artist/Recommended";
import getArtistsData from '@/lib/artists';
import React, { useState } from 'react';
import { getAllArtists } from "../../../services/artist.service";

export default async function Artist() {
  const localData = await getArtistsData()

  const data = getAllArtists('/fs/').then(()=>{
    return 
  })
  
  return (
    <div className="">
      {/* <p>Data from Child: {dataFromChild}</p> */}
        <Recommended data={localData} pathname='artists'/>
        <BrowseArtists />
    </div>
  );
}
