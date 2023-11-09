"use client";
import React from "react";
import Image from "next/image";

import { Card, CardFooter, Button } from "@nextui-org/react";
import {Spacer} from "@nextui-org/react";
import styles from "./AlbumCover.module.css";

import Artist01 from "@/assets/artists/big_bag/cover_img/narmelkyee.jpg";
import Artist02 from "@/assets/artists/big_bag/cover_img/arrloneatwatpunk.jpg";

export default function Albumcover() {
  return (
    <div className="pt-6">
      <div className="mb-4 wapper mx-4 pb-4">
        <h3 className="title mb-2">
            <div className="flex row gap-2 items-center">
                <div>Singles</div>
                <div>|</div>
                <div>Albums</div>
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

            </div>
        </h3>
        <div className="grid grid-cols-3 gap-4 xl:grid-cols-7 md:grid-cols-5">
          {/* Loop All Artists Alblums */}
          <div id="albumcover_id">
            <Image
              className="rounded-lg"
              alt="..."
              src={Artist01}
              style={{ objectFit: "cover" }}
              // layout="responsive"
              suppressHydrationWarning
            />
            <Spacer y={3} />
            <div className={styles.albums_name}>Nar Mel Kyee</div>
            <Spacer y={3} />
            <div className={styles.albums_date}>30 May 2019</div>
          </div>
          <div id="albumcover_id">
            <Image
              className="rounded-lg"
              alt="..."
              src={Artist02}
              style={{ objectFit: "cover" }}
              // layout="responsive"
              suppressHydrationWarning
            />
            <Spacer y={3} />
            <div className={styles.albums_name}>Arr Lone Atwat PUNK</div>
            <Spacer y={3} />
            <div className={styles.albums_date}>30 May 2019</div>
          </div>
          <div id="albumcover_id">
            <Image
              className="rounded-lg"
              alt="..."
              src={Artist01}
              style={{ objectFit: "cover" }}
              // layout="responsive"
              suppressHydrationWarning
            />
            <Spacer y={3} />
            <div className={styles.albums_name}>Nar Mel Kyee</div>
            <Spacer y={3} />
            <div className={styles.albums_date}>30 May 2019</div>
          </div>
          <div id="albumcover_id">
            <Image
              className="rounded-lg"
              alt="..."
              src={Artist02}
              style={{ objectFit: "cover" }}
              // layout="responsive"
              suppressHydrationWarning
            />
            <Spacer y={3} />
            <div className={styles.albums_name}>Arr Lone Atwat PUNK</div>
            <Spacer y={3} />
            <div className={styles.albums_date}>30 May 2019</div>
          </div>
          <div id="albumcover_id">
            <Image
              className="rounded-lg"
              alt="..."
              src={Artist01}
              style={{ objectFit: "cover" }}
              // layout="responsive"
              suppressHydrationWarning
            />
            <Spacer y={3} />
            <div className={styles.albums_name}>Nar Mel Kyee</div>
            <Spacer y={3} />
            <div className={styles.albums_date}>30 May 2019</div>
          </div>
          <div id="albumcover_id">
            <Image
              className="rounded-lg"
              alt="..."
              src={Artist02}
              style={{ objectFit: "cover" }}
              // layout="responsive"
              suppressHydrationWarning
            />
            <Spacer y={3} />
            <div className={styles.albums_name}>Arr Lone Atwat PUNK</div>
            <Spacer y={3} />
            <div className={styles.albums_date}>30 May 2019</div>
          </div>
          <div id="albumcover_id">
            <Image
              className="rounded-lg"
              alt="..."
              src={Artist02}
              style={{ objectFit: "cover" }}
              // layout="responsive"
              suppressHydrationWarning
            />
            <Spacer y={3} />
            <div className={styles.albums_name}>Arr Lone Atwat PUNK</div>
            <Spacer y={3} />
            <div className={styles.albums_date}>30 May 2019</div>
          </div>
        </div>
      </div>
    </div>
  );
}
