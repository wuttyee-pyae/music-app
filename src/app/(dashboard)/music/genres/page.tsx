import Image from "next/image";

import MusicGenres from "@/components/music/genres";

export default function Home() {
  return (
    <div className="">
        <div className="pt-6">
        <div className="mb-4 wapper mx-4">
          <MusicGenres />
        </div>
    </div>
    </div>
  );
}
