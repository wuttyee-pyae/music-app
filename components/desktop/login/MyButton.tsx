import { Button } from "@nextui-org/react";
import React, { FC, ReactNode } from "react";
import styles from "./ErrorMessage.module.css";
import { PlusIcon } from "../artist/PlusIcon";

const MyButton = (props: { children: string; isSubmitting: boolean; startContent?: React.ReactNode; }) => {
  return (
    <>
      <Button
        disabled={props.isSubmitting}
        fullWidth
        startContent={props.startContent}
        endContent
        color="primary"
        className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg"
        type="submit"
      >
        {props.children}
      </Button>
    </>
  );
};

export default MyButton;
