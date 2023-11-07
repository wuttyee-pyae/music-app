import Image from "next/image";

import MusicGenres from "@/components/music/Genres";
import MoodsGenres from "@/components/music/Moods";

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
