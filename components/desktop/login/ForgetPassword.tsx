import React from "react";
import { Card, CardBody, Input } from "@nextui-org/react";
import styles from "./ErrorMessage.module.css";
import MyButton from "./MyButton";
import Link from "next/link";

export default function ForgetPassword(props: any) {
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
          Please Enter your Email.
        </div>
        <CardBody className="overflow-hidden">
          <form className="flex flex-col gap-4">
            <Input
              value={value}
              type="email"
              label="Email"
              placeholder="Enter your Email"
              variant="bordered"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "secondary"}
              errorMessage={isInvalid && "Please enter a valid email"}
              onValueChange={setValue}
              className={styles.hidden}
            />
            <div className="flex gap-2 justify-end">
              <Link href="/verify_email" passHref className="w-full">
                <MyButton>Get New Password</MyButton>
              </Link>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
