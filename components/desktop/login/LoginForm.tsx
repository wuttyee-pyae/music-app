import React, { FormEvent } from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Card,
  CardBody,
} from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import MyButton from "./MyButton";
import styles from "./ErrorMessage.module.css";
import { useFormik } from 'formik';
import { loginSchema } from '../../../services/schema'
import { login } from "../../../services/auth.service";

import { setAuth, setToken } from "../../../redux/features/appSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation"

export default function LoginForm(props: any) {
  const dispatch = useDispatch();
  const router = useRouter()
  const [selected, setSelected] = React.useState("login");
  const [passwordType, setPasswordType] = React.useState('password')
  const [isVisible, setIsVisible] = React.useState(false);
  const [showErrResponse , setShowErrResponse] = React.useState(false)


  const onSubmit = async (values: any, actions: any )  => {
    setShowErrResponse(false)
    console.log(" onsubmit", values, errors )
    // await new Promise((resolve) => setTimeout(resolve,1000))
    // actions.resetForm()

    try {
      let userData = await login(values)
      console.log("--  data ", userData?.response?.status)
      if ( userData?.response?.status == 401) {
        setShowErrResponse(true)
      }else{
        if(userData.jwt){
          console.log("jwt ===== ")
          dispatch(setAuth(true))
          dispatch(setToken(userData.jwt))
          router.push('/dashboard')
        }
      }
    } catch (err) {
      throw err;
    }
  }
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: 'myintmyatthein',
      password: 'Myintmyatthein!1331'
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  const toggleVisibility = () => {
    isVisible ? setPasswordType('password') : setPasswordType('text')
    setIsVisible(!isVisible)
  };


  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Card className="max-w-full w-[400px] h-auto">
        {
          showErrResponse && <div className="bg-danger text-white w-full p-4" >
          Incorrect username or password.
        </div>
        }
        

        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected as any}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <Input
                  name="username"
                  type="text"
                  label="Email or Username"
                  placeholder="Enter your Email or Username"
                  value={values.username}
                  // isInvalid={isInvalid}
                  color={errors.username && touched.username ? "danger" : "secondary"}
                  // errorMessage={isInvalid && "Please enter a valid username"}
                  // className={styles.hidden}
                  // className={errors.username && touched.username ? 'styles.input-error' : "" }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && touched.username && <p className={styles.errorMessage} >{errors.username}</p>}
                <Input
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  name="password"
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type={passwordType}
                  color={errors.password && touched.password ? "danger" : "secondary"}
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
                {errors.password && touched.password && <p className={styles.errorMessage} >{errors.password}</p>}
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <p className="text-center text-small">
                  OR <Link size="sm" href="/forgot_password">Forgot password?</Link>
                </p>
                <div className="flex gap-2 justify-center">
                  <div className="w-full">
                  <MyButton isDisabled={isSubmitting}>Log in</MyButton>
                  </div>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-auto">
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                />
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  isRequired
                  label="Phone Number"
                  placeholder="Enter your Phone Number"
                  type="phone"
                />

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
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-center">
                  <div className="w-full">
                  <MyButton isDisabled={isSubmitting}>Sing up</MyButton>
                  </div>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
