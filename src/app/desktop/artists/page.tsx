
import BrowseArtists from "@/components/desktop/atrist/BrowseArtists";
import Recommended from "@/components/desktop/atrist/Recommended";
import Image from "next/image";


export default function Atrist() {
  return (
    <div className="">
        <Recommended />
        <BrowseArtists />
    </div>
  );
}
