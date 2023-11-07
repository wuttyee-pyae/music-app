import React from "react";
import { Link } from "@nextui-org/react";

import styles from "./Breadcrumb.module.css";

export default function Breadcrumb() {
  return (
    <div className="flex gap-4">
      <Link
        href="/artists"
        color="foreground"
        className={styles.breadcrumb_item}
      >
        Artists
      </Link>
      <span className="foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11.121"
          height="19.414"
          viewBox="0 0 11.121 19.414"
        >
          <path
            id="Path_1025"
            data-name="Path 1025"
            d="M6379-271.7l9,9,9-9"
            transform="translate(272.41 6397.707) rotate(-90)"
            fill="none"
            stroke="#a4a4a4"
            strokeWidth="2"
          />
        </svg>
      </span>
      <Link href="#" color="foreground" className={styles.breadcrumb_item}>
        Big Bag
      </Link>
    </div>
  );
}
