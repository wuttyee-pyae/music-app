import React from "react";
import Image from "next/image";
import styles from "./artistscover.module.css"

import Artistscover01 from "../../../public/images/non-cover-bg.jpg";

export default function Artistscover() {
  return (
      <div className="">
        <div className={styles.cover_gradient}>
        <Image
        priority
                  className=""
                  alt="..."
                  src={Artistscover01}
                  style={{ objectFit: "cover" }}
                />
        </div>
            
      </div>
  );
}
