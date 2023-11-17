import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/react";

import { Tooltip } from "@nextui-org/react";
import Popular from "./popular/Populer";
import Order from "./order/Order";
import Gender from "./gender/Gender";
import Genre from "./genre/Genre";
import Mood from "./mood/Mood";

  export default function SelectBar() {
  return (
    <div className="">
      <div className="w-full scroll-smooth sort_bg p-2 mb-4">
        <div className="mb-4 wapper mx-4">
          <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 gap-4 items-center">
            <div className="">
              {/* <div className="flex items-center">
                <Tooltip
                  color="secondary"
                  showArrow={true}
                  placement="top"
                  className="secondary"
                  content={
                    <div className="px-1 py-2 w-max">
                      <div className="text-tiny text-center">Go Back</div>
                    </div>
                  }
                >
                  <Link href="/music" className="back">
                    <BackIcon width={20} height={20} />
                  </Link>
                </Tooltip>

                <Tooltip
                  color="secondary"
                  showArrow={true}
                  placement="top"
                  className="secondary"
                  content={
                    <div className="px-1 py-2 w-max">
                      <div className="text-tiny text-center">Go Forward</div>
                    </div>
                  }
                >
                  <Link href="/music" className="back" isDisabled>
                    <NextIcon width={20} height={20} />
                  </Link>
                </Tooltip>
              </div> */}
              <h3 className="title ml-4">Moods Id</h3>
            </div>
            <div>
              <Popular />
            </div>
            <div>
              <Order />
            </div>
            <div>
              <Gender />
            </div>
            <div>
              <Genre />
            </div>
            <div>
              <Mood />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
