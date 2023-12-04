'use client'
import CadPlayList from "@/components/desktop/yoursplaylist/CadPlayList";
import { Link } from "@nextui-org/react";
import React from "react";
import { Input } from "@nextui-org/react";


export default function Desktop() {
  const [value, setValue] = React.useState("junior2nextui.org");
  const validateEmail = (value: any) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);


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