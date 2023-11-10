"use client";

import * as React from "react";
import NextImage from "next/image";
import UserProfile from "@/components/profile/UserProfile";

export default function Profile() {
  return (
    <div className="mx-4 pt-6">
      <UserProfile />
    </div>
  );
}
