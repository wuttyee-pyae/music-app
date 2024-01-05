"use client";
import React, { useState } from "react";
import AddPlayIcon from "@/components/desktop/yoursplaylist/icons/AddPlayIcon";
import { FileUpload } from "primereact/fileupload";

export default function AddCoverImg({setData} : {setData: any}) {
  const [imgSrc,setImgSrc] = useState<any>()

  const onImageChange = (event: any) => {
    if(event.target.files.length !== 0) {
        const reader = new FileReader();

        reader.onload = (e : any) => {
          setData({image : e.target.result , imageName : event.target.files[0].name })
        setImgSrc(e.target.result);
      
    }
    reader.readAsDataURL(event.target.files[0]);
}

  }
  return (
    <div className="w-full h-auto font-bold mb-4">
      <div className="flex flex-col justify-center items-center border-2 rounded-lg p-6">
        <div className="image_boder flex flex-col justify-center items-center">
          {
            imgSrc  ?  <img src={imgSrc} /> : 
            <div className="text-center">
              <label htmlFor="file-input-image">
              <AddPlayIcon zIndex={true} /> 
            </label>
              <input id="file-input-image" type="file"  accept="image/*" onChange={onImageChange}  className="hidden" />
          <div className="mt-4 text-white">Add Cover Image</div>
            </div>
          }
         
        </div>
      </div>
    </div>
  );
}
