"use client";
import React, { useRef } from "react";
import { Link } from "@nextui-org/react";

const NotFound = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="drop-shadow-xl bg-pink-600">
      <div className="">
        <div className="pt-6">
          <div className="mb-4 wapper mx-4">
            <div className="grid grid-cols-2 px-6 items-center">
              <div className="text-white">
                <h1 className="font-bold text-2xl">404s and heartbreaks</h1>
                <p>We couldn't find the page</p>
                <p>
                  you were looking for. Maybe our FAQ or Community can help?
                </p>
                <p>We couldn't find the page</p>
                <div className="my-4">
                  <Link href="/home" color="foreground" underline="always" showAnchorIcon>
                    GO BACK HOEM
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <lottie-player
                  id="firstLottie"
                  ref={ref}
                  autoplay
                  loop
                  mode="normal"
                  src={"/lottie/error-404.json"}
                  style={{ width: "auto", height: "auto" }}
                ></lottie-player>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/tgs-player.js" async></Script> */}
    </div>
  );
};

export default NotFound;
