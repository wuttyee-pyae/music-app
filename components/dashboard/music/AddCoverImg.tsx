"use client";
import React from "react";
import AddPlayIcon from "@/components/desktop/yoursplaylist/icons/AddPlayIcon";
import { FileUpload } from "primereact/fileupload";

export default function AddCoverImg() {
  return (
    <div className="w-full h-auto font-bold mb-4">
      <div className="flex flex-col justify-center items-center border-2 rounded-lg p-6">
        <div className="image_boder flex flex-col justify-center items-center">
          <div className="">
            <AddPlayIcon />
            {/* <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} cancelLabel="yuo"/> */}
          </div>
          <div className="mt-4 text-white">Add Cover Image</div>
        </div>
      </div>
    </div>
  );
}
