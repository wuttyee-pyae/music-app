import React from "react";
import Image from "next/image";
import styles from "./artistscover.module.css";

import Artistscover01 from "../../../../public/images/non-cover-bg.jpg";
import { TakePhoto } from "./icons/TakePhoto";
import { Button } from "@nextui-org/react";
import UserAvatar from "@/components/desktop/profile/useritem/UserAvatar";

export default function Artistscover() {
  return (
    <div >
      <div className={styles.cover_gradient}>
        <Image
          priority
          alt="..."
          src={Artistscover01}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="p-4 cover_postion_btn">
        <div className="flex justify-end">
          <Button
            isIconOnly
            color="danger"
            radius="full"
            aria-label="Take Cover Photo"
            className="cover_btn"
            variant="bordered"
          >
            <TakePhoto size={18} />
          </Button>
        </div>
      </div>

      <div className="artist_profile_postion">
        <UserAvatar />
      </div>
    </div>
  );
}
