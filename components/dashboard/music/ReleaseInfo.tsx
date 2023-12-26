import React from "react";
import { Chip, Input } from "@nextui-org/react";
import AddCoverImg from "./AddCoverImg";
import Gender from "@/components/desktop/music/genre/Genre";

const ReleaseInfo = () => {
  return (
    <div className="my-8">
      <div className="w-full justify-center max-w-md mx-auto my-0">
      <div className="flex flex-col gap-4 justify-center">
        <div>
          <Input
            type="text"
            variant={"bordered"}
            label="Music Name"
            className="mb-8"
          />
        </div>
        <div>
          <AddCoverImg />
        </div>
        <div>
          <Input type="text" variant={"bordered"} label="Add Artist" />
        </div>
        <div>
          <Gender />
        </div>
        <div>
          <Input type="text" variant={"bordered"} label="Relese Date" />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ReleaseInfo;
