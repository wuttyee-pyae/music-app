import MusicTypes from "@/components/desktop/music/MusicTypes";
import Image from "next/image";

export default function Home() {
  return (
        <div className="pt-6">
        <div className="mb-4 wapper mx-4">
          {/* <MusicGenres /> */}
          <MusicTypes title={'Genres'}/>
          <MusicTypes title={'Moods'}/>
        </div>
    </div>
  );
}
