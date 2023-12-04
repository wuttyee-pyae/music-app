import LyricsCard from "@/components/desktop/musicplayer/lyrics/LyricsCard";

export default function Lyrics(data: any) {
  return (
        <div className="pt-6">
        <div className="mb-4 wapper mx-4">
            <LyricsCard data={data}/>
        </div>
    </div>
  );
}
