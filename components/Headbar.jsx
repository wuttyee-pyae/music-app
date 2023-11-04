import React from "react";
import Image from "next/image";

import Searchbar from "./nav/searchbar";
import Noti from "./nav/Noti";
import Languagexbar from "./nav/Languagexbar.tsx";
import { Button } from "@nextui-org/react";

export default function Headbar() {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4 items-center">
        <div className="col-span-2">
          <Searchbar />
        </div>
        <div className="col-span-2">
          <div className="flex gap-2 justify-end">
          <div>
              <Noti />
            </div>
            <Languagexbar />
            
            <div className="mx-4">
              <Button
                radius="full"
                className="bg-gradient-to-tr from-pink-600 to-blue-500 text-white shadow-lg"
              >
                Log In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
