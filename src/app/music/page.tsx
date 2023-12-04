import Image from "next/image";

import MusicGenres from "@/components/desktop/music/Genres";
import MoodsGenres from "@/components/desktop/music/Moods";

export default function Home() {
  return (
        <div className="pt-6">
        <div className="mb-4 wapper mx-4">
          <MusicGenres />
          <MoodsGenres />
        </div>
    </div>
  );
}