import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import MyButton from "./MyButton";
import styles from "./ErrorMessage.module.css";

export default function CheckActivationLink(props: any) {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <Card className="max-w-full w-[400px] h-auto">
          <div className="bg-danger text-white w-full p-4">
            Please Check in Verify Your E-mail
          </div>

          <CardBody className="overflow-hidden">
            <p className="text-center text-small">
              Click to Verify Link{" "}
              <Link size="sm" href="/new_password">
                Verify
              </Link>
            </p>
            {/* <div className="flex gap-2 justify-end">
              <MyButton>Verify</MyButton>
            </div> */}
          </CardBody>
        </Card>
      </div>
    </>
  );
}
