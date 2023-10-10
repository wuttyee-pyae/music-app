import Recommended from "@/components/atrist/recommended";
import BrowseArtists from "@/components/atrist/browseartists";
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
        <Recommended />
        <BrowseArtists />
    </div>
  );
}
