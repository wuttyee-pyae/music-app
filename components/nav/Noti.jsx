import React from "react";
import {Badge, Button} from "@nextui-org/react";
import {NotificationIcon} from "./icons/NotificationIcon";

export default function Noti() {
  return (
    <Badge content="99+" shape="circle" color="danger">
      <Button
        radius="full"
        isIconOnly
        aria-label="more than notifications"
        variant="light"
      >
        <NotificationIcon size={24} />
      </Button>
    </Badge>
  );
}
