import VideoPlayer from "@/components/common/VideoPlayer";
import Swipper from "@/components/dashboard/swipper/Swipper";

export default function Player() {
  const videoList = [
    {
      id: 1,
      name: "Chan Khae",
      picture: "/artists/idiots/mtv/chan_khae/cover.jpg",
      type: "rock",
      singer: "IDIOTS",
      viewer: 601910209,
      liked: false,
    },
    {
      id: 2,
      name: "Min Nae Nnee Phot",
      picture: "/artists/idiots/mtv/min_nae_nee_phot/cover.jpg",
      type: "rock",
      singer: "IDIOTS",
      viewer: 5623451858,
      liked: false,
    },
    {
      id: 3,
      name: "Nga Bawa Pyan You",
      picture: "/artists/idiots/mtv/nga_bawa_pyan_you/cover.jpg",
      type: "rock",
      singer: "IDIOTS",
      viewer: 2496513560,
      liked: false,
    },
    {
      id: 4,
      name: "Su Taung",
      picture: "/artists/idiots/mtv/su_taung/cover.jpg",
      type: "rock",
      singer: "IDIOTS",
      viewer: 4668096891,
      liked: false,
    },
    {
      id: 5,
      name: "Tar Ggyi Doh Aye Say",
      picture: "/artists/idiots/mtv/tar_gyi_doh_aye_say/cover.jpg",
      type: "rock",
      singer: "IDIOTS",
      viewer: 1761150809,
      liked: false,
    },
  ];
  return (
        <div className="container pt-6">
        <div >
           <VideoPlayer/>
        </div>
        <div className="py-4">

        <Swipper dataList={videoList} />
        </div>
    </div>
  );
}
