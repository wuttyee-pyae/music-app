import { PlusIcon } from "@/components/desktop/artist/PlusIcon";
import MyButton from "@/components/desktop/login/MyButton";
import React from "react";
import TackItem from "./TackItem";

export default function AddTrack() {
  return (
    <div className="mb-8">
      <div className="max-w-fit justify-center my-0 mx-auto">
        <MyButton isSubmitting={false} startContent={<PlusIcon />}>
          Add Tack
        </MyButton>
      </div>

      <TackItem />
    </div>
  );
}
