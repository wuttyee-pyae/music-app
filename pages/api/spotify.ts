// import { comparePasswords, createJWT } from "@/lib/auth";
// import { db } from "@/lib/db";
// import { serialize } from "cookie";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function getAccessToken(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const url = "https://accounts.spotify.com/api/token";

//   var formBody = new URLSearchParams();
// formBody.append("grant_type", "client_credentials");
// formBody.append("client_id", "2d1d40dbfa3d4c4c853737adfffb60f9");
// formBody.append("client_secret", "c9e5175b34fe4dd7839428f4fe8474a9");

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
