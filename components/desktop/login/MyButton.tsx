import { Button } from "@nextui-org/react";
import React, { FC, ReactNode } from "react";
import styles from "./ErrorMessage.module.css";
import { PlusIcon } from "../artist/PlusIcon";

const MyButton = (props: { children: string; isDisabled?: boolean; startContent?: React.ReactNode; }) => {
  return (
    <div>
      <Button
        disabled={props.isDisabled || false}
        fullWidth
        startContent={props.startContent}
        // endContent
        color="primary"
        className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg"
        type="submit"
      >
        {props.children}
      </Button>
    </div>
  );
};

export default MyButton;
