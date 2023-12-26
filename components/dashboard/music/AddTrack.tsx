import FilesUpload from "@/components/common/FilesUpload";
import { PlusIcon } from "@/components/desktop/artist/PlusIcon";
import MyButton from "@/components/desktop/login/MyButton";
import React from "react";

export default function AddTrack() {
  return (
    <div className="mb-8">
      <div className="max-w-fit justify-center my-0 mx-auto">
        <MyButton isDisabled={false} startContent={<PlusIcon />}>
          Add Tack
        </MyButton>
      </div>

      <FilesUpload />
    </div>
  );
}
