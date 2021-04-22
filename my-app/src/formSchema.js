import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(3, "username must be 3 chars long"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  password: yup
    .string()
    .required("username is required")
    .min(3, "username must be 3 chars long"),
  tos: yup.string().oneOf(["agree"], "Terms of Service Agreement is required"),
});
