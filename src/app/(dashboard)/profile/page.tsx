"use client";

import * as React from "react";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import NextImage from "next/image";
import Artist01 from "@/assets/artists/aungh_htet/about_image/aung-htet.jpg";
import CrbtPlayer from "@/components/crbtplayer/CrbtPlayer";

export default function Profile() {
  return (
    <div className="mx-4 pt-6">
      <div className="grid grid-cols-3 gap-4 xl:grid-cols-7 md:grid-cols-5">
        <div className="">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                isZoomed
                as={NextImage}
                width={300}
                height={200}
                className="object-cover rounded-lg"
                src="/images/aung-htet.jpg"
                alt="Card background"
                fallbackSrc="/images/aung-htet.jpg"
              />
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="w-full">
        <CrbtPlayer />
      </div>
    </div>
  );
}
