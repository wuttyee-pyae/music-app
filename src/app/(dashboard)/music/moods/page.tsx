import Image from "next/image";

import MoodsGenres from "@/components/music/modes";

export default function Home() {
  return (
        <div className="pt-6">
        <div className="mb-4 wapper mx-4">
          <MoodsGenres />
        </div>
    </div>
  );
}
