import BrowseArtists from "@/components/atrist/BrowseArtists";
import Recommended from "@/components/atrist/Recommended";
import Image from "next/image";


export default function Atrist() {
  return (
    <div className="">
        <Recommended />
        <BrowseArtists />
    </div>
  );
}
