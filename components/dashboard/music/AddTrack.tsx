import FilesUpload from "@/components/common/FilesUpload";
import React from "react";

export default function AddTrack({handleInfo , formData} : {handleInfo:any , formData: any}) {
  return (
    <div className="mb-8">
      <FilesUpload handleInfo={handleInfo}  formData={formData}/>
    </div>
  );
}
