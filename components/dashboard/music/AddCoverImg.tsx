"use client";
import React from "react";
import AddPlayIcon from "@/components/desktop/yoursplaylist/icons/AddPlayIcon";

export default function AddCoverImg() {
  return (
    <div className="w-full h-auto font-bold mb-4">
      <div className="flex flex-col justify-center items-center border-2 rounded-lg p-6">
        <div className="image_boder flex flex-col justify-center items-center">
          <div className="">
            <AddPlayIcon />
          </div>
          <div className="mt-4 text-white">Add Cover Image</div>
        </div>
      </div>
    </div>
  );
}
