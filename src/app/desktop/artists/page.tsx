import BrowseArtists from "@/components/desktop/atrist/BrowseArtists";
import Recommended from "@/components/desktop/atrist/Recommended";
import getArtistsData from '@/lib/artists';

export default async function Artist() {
  const localData = await getArtistsData()
  return (
    <div className="">
        <Recommended data={localData} />
        <BrowseArtists />
    </div>
  );
}
