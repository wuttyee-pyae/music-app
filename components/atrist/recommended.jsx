"use client";
import React from "react";
import Image from "next/image";

import { Card, CardFooter, Button } from "@nextui-org/react";

import Artist01 from "@/assets/artists/aungh_htet/about_image/aung-htet.jpg";
import Artist02 from "@/assets/artists/david_lai/about_image/david-lai.jpg";
import Artist03 from "@/assets/artists/g_fatt/about_image/g-fatt.jpg";

export default function Recommended() {
  return (
    <div className="pt-6">
      <div className="mb-4 wapper mx-4 pb-4">
        <h3 className="title mb-2">Recommended Artists</h3>
        <div className="grid grid-cols-3 gap-4 xl:grid-cols-7 md:grid-cols-5">
          {/* Loop All Artists Id */}
          <div id="recommended_artists_id">
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                className="rounded-lg"
                alt="..."
                src={Artist01}
                style={{ objectFit: "cover" }}
                // layout="responsive"
                suppressHydrationWarning
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
            <div className="artist_list_name my-2">Aung Htet</div>

          </div>
          <div id="recommended_artists_id">
            <Image
              className="rounded-lg"
              alt="..."
              src={Artist01}
              style={{ objectFit: "cover" }}
              // layout="responsive"
              suppressHydrationWarning
            />
            <div className="artist_list_name my-2">Aung Htet</div>
          </div>

          <div id="recommended_artists_id">
            <Image
              className="rounded-lg"
              alt="..."
              src={Artist02}
              style={{ objectFit: "cover" }}
              // layout="responsive"
              suppressHydrationWarning
            />
            <div className="artist_list_name my-2">David Lai</div>
          </div>

          <div id="recommended_artists_id">
            <Image
              className="rounded-lg"
              alt="..."
              src={Artist03}
              style={{ objectFit: "cover" }}
              // layout="responsive"
              suppressHydrationWarning
            />
            <div className="artist_list_name my-2">G-fatt</div>
          </div>
        </div>
      </div>
    </div>
  );
}
