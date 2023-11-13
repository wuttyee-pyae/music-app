"use client";
import React from "react";
import { Badge, Button, Avatar } from "@nextui-org/react";

import styles from "./UserAvatar.module.css";
import { AddIcon } from "./icons/AddIcon";

export default function UserAvatar() {
  return (
    <div className="flex gap-4 items-center">
      <Badge
        isOneChar
        content={
          <Button radius="full" className="add_phto">
            <AddIcon size={20} height={20} width={20} />
          </Button>
        }
        color="danger"
        shape="circle"
        placement="top-right"
      >
        <Button radius="full" className="add_phto_avatar">
          <Avatar
            radius="full"
            className="w-20 h-20 text-large"
            src="https://i.pravatar.cc/300?u=a042581f4e29026704f"
          />
        </Button>
      </Badge>
      <div className="flex-row">
        <div className="flex">
          <p className={styles.user_name}>John</p> <p className={styles.user_name}>Doe</p>
        </div>
        <div><p className={styles.user_lable}>Free Account</p></div>
      </div>
    </div>
  );
}
