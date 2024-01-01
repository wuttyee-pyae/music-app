import React from "react";
import { Button } from "@nextui-org/react";

export default function LoginFooter() {
  return (
      <footer className="m-2 footer-container fixed-bottom border-gradient border-gradient-purple only-top bg-gradient-to-bl from-pink-500 to-sky-500 text-white">
        <div className="px-2 grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <p className="uppercase font-light text-sm">Preview of Yours</p>
            <p>
              Sign up to get unlimited songs and mtv with occasional ads. No
              credit card needed.
            </p>
          </div>
          <div className="flex justify-end">
            <Button color="default" size="lg" radius="full" >
              Sign Up Free
            </Button>
          </div>
        </div>
      </footer>
  );
}
