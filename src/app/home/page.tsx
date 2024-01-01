

// async function getAccessToken() {
//   const url = "https://accounts.spotify.com/api/token";

import Banner from "@/components/mobile/banner/Banner";
import Crbt from "../crbt/page";
import getArtistsData from "@/lib/artists";
import MusicTypes from "@/components/desktop/music/MusicTypes";
import Recommended from "@/components/desktop/artist/Recommended";
import BrowseArtists from "@/components/desktop/artist/BrowseArtists";

//   var formBody = new URLSearchParams();
//   formBody.append("grant_type", "client_credentials");
//   formBody.append("client_id", "2d1d40dbfa3d4c4c853737adfffb60f9");
//   formBody.append("client_secret", "c9e5175b34fe4dd7839428f4fe8474a9");

//   const result = fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//     },
//     body: formBody,
//   });

//   if (!result.ok) {
//     // handle your errors
//     throw new Error("API error");
//   }

//     const data = await result.json();
//     console.log("Access Token: ", data);
//     return data.data;
  
// }

export default async function Home(props: any) {
  const localData = await getArtistsData()

  // getAccessToken();

  return (
    <div>
      <div className="grid grid-cols-1 mb-6">
      <Banner />

      </div>
      <div className="mx-4">
          <MusicTypes title={"Genres"} />
          <MusicTypes title={"Moods"} />
        </div>
        <Recommended data={localData} pathname="artists" />
        <BrowseArtists />
    </div>
  );
}