import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
    // email: yup.string().email({message: "Please input valid email"}).required("Email or username required"),
    username: yup.string().min(2).required("Email or username required"),
    password: yup
        .string()
        .min(6)
        .matches(passwordRules, { message: "Minium 6 characters,1 Uppercase,1 Lowercase,1 digit" })
        .required("Password required"),
    // confirmPassword: yup.string().oneOf([yup.ref("password"),null],"Password must match"),
})

export const songUploadSchema = yup.object().shape({
    song: yup.array().of(
        yup.object().shape({
          name: yup.string().min(2).required("Music name is required"),
          image: yup.string().required("Song image is required")
        })
      )
})
