import React from "react";
import { Card, CardBody, Input } from "@nextui-org/react";
import styles from "./ErrorMessage.module.css";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import MyButton from "./MyButton";
import Link from "next/link";

export default function NewPassword(props: any) {
  const [value, setValue] = React.useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  console.log(isInvalid, "is isInvalid");

  const [selected, setSelected] = React.useState("login");
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Card className="max-w-full w-[400px] h-auto">
        <div className="bg-danger text-white w-full p-4">
          Please Enter yor New Password
        </div>
        <CardBody className="overflow-hidden">
          <form className="flex flex-col gap-4">
            <Input
              isRequired
              label="Password"
              placeholder="Enter your password"
              type="password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />

            <Input
              isRequired
              label="Repeat Password"
              placeholder="Repeat your password"
              type="password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
            <div className="flex gap-2 justify-end">
            <Link href="/new_password" passHref className="w-full">
              <MyButton>Update Password</MyButton>
              </Link>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
