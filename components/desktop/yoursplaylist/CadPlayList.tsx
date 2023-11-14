"use client";
import React from "react";
import { Tooltip, Button, Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Play from "./Play";

export default function CadPlayList() {
  return (
    <Tooltip content={<Play />} className="text-white play_hover" offset={-50} placement="right">
      <Button className="playlist_card p-0">
        <Card className="py-4 mb-4">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-sm truncate overflow-visible">
              Jung Kook is on top of the Hottest 50!
            </h4>
          </CardHeader>
        </Card>
      </Button>
    </Tooltip>
  );
}
