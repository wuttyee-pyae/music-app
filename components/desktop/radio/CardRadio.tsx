"use client";
import React from "react";
import {
  Tooltip,
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";

const radio = [
  {
    title: "City FM yangon",
    img: "images/radio_music.gif",
    url: "/",
    frequency: "89.0"
  },
  {
    title: "Mandaly FM",
    img: "images/radio_music.gif",
    url: "/",
    frequency: "87.9"
  },
  {
    title: "Shwe FM",
    img: "images/radio_music.gif",
    url: "/",
    frequency: "88.9"
  },
  {
    title: "Padamyar FM",
    img: "images/radio_music.gif",
    url: "/",
    frequency: "88.6"
  },
  {
    title: "Shwe Ayeyar FM",
    img: "images/radio_music.gif",
    url: "/",
    frequency: "web"
  },
  {
    title: "Cherry FM",
    img: "images/radio_music.gif",
    url: "/",
    frequency: "89.3"
  },
  {
    title: "Shwe Ayeyar FM",
    img: "images/radio_music.gif",
    url: "/",
  },
  {
    title: "Dhamma Radio - Channel 1 ",
    img: "images/radio_music.gif",
    url: "/",
    frequency: "web"
  },
];

export default function CardRadio() {
  return (
    <div className="py-4 wapper mx-4">
      <h3 className="title mb-2">Radio Channel</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Loop All Radio Channel Id */}

        {radio.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
            className="py-4"
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              
              <h4 className="font-bold text-large text-left truncate overflow-visible">
                <b>{item.title}</b>
              </h4>
              <p className="text-default-500">
                <b>FM {item.frequency}</b>
              </p>
            </CardHeader>

            <CardBody className="overflow-visible py-2">
              <Image
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[auto] bg-gradient-to-r from-indigo-500 to-purple-500"
                src={item.img}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
