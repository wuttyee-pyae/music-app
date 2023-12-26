"use client";
import React from "react";
import AddPlayIcon from "@/components/desktop/yoursplaylist/icons/AddPlayIcon";

export default function AddCoverImg() {
  return (
    <div
      className="w-full h-52 font-bold mb-4"
    >
      <div className="flex flex-col">
        
        <div>
          <AddPlayIcon />
        </div>
        <div className="mt-4">Add Cover Image</div>
      </div>
    </div>
  );
}
