"use client";
import React from "react";
import UserAvatar from "./useritem/UserAvatar";
import PremiumBtn from "./useritem/PremiumBtn";
import UserForm from "./UserForm";

export default function UserProfile() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 items-center px-16">
        <div>
          <UserAvatar />
        </div>
        <div className="flex justify-end">
          <PremiumBtn />
        </div>
      </div>
      <div className="px-16 my-10">
        <UserForm />
      </div>
    </div>
  );
}
