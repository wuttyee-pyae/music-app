import React from "react";
import Image from "next/image";

import styles from "./BannerImg.module.css";

import BgImg from "@/assets/playlist/banner/banner-01.jpg";

const BannerImg = () => {
  return (
    <div >
      <div className={styles.cover_gradient}>
        <Image
          className="absolute"
          alt="..."
          src={BgImg}
          style={{ objectFit: "cover" }}
          layout="responsive"
          suppressHydrationWarning
        />
      </div>
    </div>
  );
};

export default BannerImg;
