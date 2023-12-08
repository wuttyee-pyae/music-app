import { Button } from "@nextui-org/react";
import React, { FC, ReactNode } from "react";
import styles from "./ErrorMessage.module.css";

const MyButton = (props: { children: string , isSubmitting : boolean }) => {
  return (
    <>
      <Button  
      disabled={props.isSubmitting}
        fullWidth
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
