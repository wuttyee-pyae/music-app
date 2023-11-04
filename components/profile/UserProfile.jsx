
"use client";
import React from "react";
import  UserAvatar from "./useritem/userAvatar";
import  PremiumBtn  from "./useritem/PremiumBtn";

export default function UserProfile() {
  return (
    <div className="grid grid-cols-2 gap-4 items-center px-16">
        <div>
        <UserAvatar />
      </div>
      <div className="flex justify-end">
        <PremiumBtn />
      </div>
    </div>
  );
}
