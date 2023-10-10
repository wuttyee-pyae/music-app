"use client";

import { register, signin } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Button from "./Button";
import CardBox from "./CardBox";
import Input from "./Input";

const registerContent = {
  linkUrl: "/signin",
  linkText: "Already have an account?",
  header: "Create a new account",
  subheader: "Just a few things to get started",
  buttonText: "Register",
};

const signinContent = {
  linkUrl: "/register",
  linkText: "Don't have an account?",
  header: "Welcome back!",
  subheader: "Enter your credentials to access your account",
  buttonText: "Sign In",
};

const initial = { email: "", password: "", firstName: "", lastName: "" };

const AuthForm = ({ mode }) => {
  const [formState, setFormState] = useState({ ...initial });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "register") {
      await register(formState);
    } else {
      await signin(formState);
    }

    setFormState(initial);
    router.replace("/home");
  };

  const content = mode === "register" ? registerContent : signinContent;

  return (
    <CardBox>
      <div className="w-full">
        <div className="text-center">
          <h2 className="text-3xl mb-2">{content.header}</h2>
          <p className="tex-lg text-black/25">{content.subheader}</p>
        </div>
        <form onSubmit={handleSubmit} className="py-4 w-full">
          {mode === "register" && (
            <div className="flex mb-4 justify-between">
              <div className="pr-2">
                <div className="text-sm font-bold mb-1 text-white">
                  First Name
                </div>
                <Input
                  required
                  placeholder="First Name"
                  value={formState.firstName}
                  className=""
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, firstName: e.target.value }))
                  }
                />
              </div>
              <div className="pl-2">
                <div className="text-sm font-bold mb-1 text-white">Last Name</div>
                <Input
                  required
                  placeholder="Last Name"
                  value={formState.lastName}
                  className=""
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, lastName: e.target.value }))
                  }
                />
              </div>
            </div>
          )}
          <div className="mb-4">
            <div className="text-sm font-bold mb-1 text-white">Email</div>
            <Input
              required
              type="email"
              placeholder="Email"
              value={formState.email}
              className=""
              onChange={(e) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
            />
          </div>
          <div className="mb-4">
            <div className="text-sm font-bold mb-1 text-white">Password</div>
            <Input
              required
              value={formState.password}
              type="password"
              placeholder="Password"
              className=""
              onChange={(e) =>
                setFormState((s) => ({ ...s, password: e.target.value }))
              }
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="mb-4">
              <Button type="submit" intent="secondary">
                {content.buttonText}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <span>
                <Link
                  href={content.linkUrl}
                  className="text-blue-500 font-bold"
                >
                  {content.linkText}
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </CardBox>
  );
};

export default AuthForm;
