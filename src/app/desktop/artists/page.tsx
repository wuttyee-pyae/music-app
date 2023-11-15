import BrowseArtists from "@/components/desktop/atrist/BrowseArtists";
import Recommended from "@/components/desktop/atrist/Recommended";
import getArtistsData from '@/lib/artists';

export default async function Artist() {
  const localData = await getArtistsData()
  return (
    <div className="">
     <h1>{localData[0].id}</h1>
        <Recommended data={localData} />
        <BrowseArtists />
    </div>
  );
}
