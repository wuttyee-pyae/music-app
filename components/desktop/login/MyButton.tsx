import { Button } from "@nextui-org/react";
import React, { FC, ReactNode } from "react";


const MyButton = (props: { children: string }) => {
  return (
    <>
      <Button
        fullWidth
        color="primary"
        className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg"
      >
        {props.children}
      </Button>
    </>
  );
};

export default MyButton;
