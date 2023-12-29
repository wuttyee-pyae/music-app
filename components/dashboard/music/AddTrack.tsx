import FilesUpload from "@/components/common/FilesUpload";
import React from "react";

export default function AddTrack({handleInfo} : {handleInfo:any}) {
  return (
    <div className="mb-8">
      <FilesUpload handleInfo={handleInfo} />
    </div>
  );
}
