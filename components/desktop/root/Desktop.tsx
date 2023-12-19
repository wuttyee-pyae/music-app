import CadPlayList from "@/components/desktop/yoursplaylist/CadPlayList";
import { Link } from "@nextui-org/react";
import React from "react";

export default function Desktop() {
  return (
    <div className="drop-shadow-xl">
      <div className="">
        <div className="pt-6">
          <div className="mb-4 wapper mx-4">
            <Link
              href="/desktop/music"
              color="foreground"
              className="text-xl hover:font-bold hover:underline mb-6"
            >
              Yours PlayList
            </Link>
            <div className="grid grid-cols-3 gap-4 xl:grid-cols-6 md:grid-cols-5">
              <CadPlayList />
              <CadPlayList />
              <CadPlayList />
              <CadPlayList />
              <CadPlayList />
              <CadPlayList />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}