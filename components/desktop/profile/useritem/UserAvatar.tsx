"use client";
import React from "react";
import { Badge, Button, Avatar } from "@nextui-org/react";

import styles from "./UserAvatar.module.css";
import { AddIcon } from "./icons/AddIcon";
import { TakePhoto } from "@/components/dashboard/nav/cover_banner/icons/TakePhoto";

export default function UserAvatar() {
  return (
    <div className="flex gap-4 items-end">
      <Badge
        isOneChar
        className="add_phto bg-none"
        content={
          <Button
            isIconOnly
            color="danger"
            radius="full"
            aria-label="Take Profile Photo"
            className="cover_btn bg-none"
            variant="bordered"
          >
            <TakePhoto size={18} />
          </Button>
        }
        placement="bottom-right"
      >
        <Button
          radius="full"
          className="w-full h-28 text-large"
          style={{
            background: "none !important",
          }}
        >
          <Avatar
          isBordered 
            radius="full"
            className="w-full h-28 text-large"
            src="https://i.pravatar.cc/300?u=a042581f4e29026704f"
          />
        </Button>
      </Badge>
      <div className="flex-row">
        <div className="flex">
          <p className={styles.user_name}>Tun Myint Than Htike</p>
        </div>
        <div>
          <p className={styles.user_lable}>Free Account</p>
        </div>
      </div>
    </div>
  );
}
