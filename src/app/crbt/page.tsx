import Banner from "@/components/mobile/banner/Banner";
import CrbtBanner from "@/components/desktop/crbt/Banner";
import CrbtTag from "@/components/desktop/crbt/CrbtTag";
import Crbtlist from "@/components/desktop/crbt/Crbtlist";
import MusicGenres from "@/components/desktop/music/Genres";
import MoodsGenres from "@/components/desktop/music/MusicTypes";
import Recommended from "@/components/desktop/artist/Recommended";
import BrowseArtists from "@/components/desktop/artist/BrowseArtists";
import getArtistsData from "@/lib/artists";

export default async function Crbt(props: any) {
  const localData = await getArtistsData();
  return (
    <div className="drop-shadow-xl">
      <div className="">
        <div className="mb-4">
          <Banner />
        </div>
        <div className="mx-4">
          <MusicGenres />
          <MoodsGenres />
        </div>
        <Recommended data={localData} pathname='artists'/>
          <BrowseArtists />
      </div>
    </div>
  );
}
