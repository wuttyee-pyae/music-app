import {Input} from "@nextui-org/react";

import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/react";

import { BackIcon } from "@/components/music/icons/BackIcon";
import { NextIcon } from "@/components/music/icons/NextIcon";
import { Tooltip } from "@nextui-org/react";

export default function App() {
    return (
        <div className="flex items-center">
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
          <Link href="/" className="back">
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
          <Link href="/" className="back" isDisabled>
            <NextIcon width={20} height={20} />
          </Link>
        </Tooltip>
      </div>
    );
  }
  