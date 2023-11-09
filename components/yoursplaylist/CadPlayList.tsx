import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function CadPlayList() {
  return (
    <Card className="py-4">
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
        <h4 className="font-bold text-sm">
          Jung Kook is on top of the Hottest 50!
        </h4>
      </CardHeader>
    </Card>
  );
}
