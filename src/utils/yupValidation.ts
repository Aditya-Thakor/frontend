import * as yup from "yup";

const registrField = yup.object().shape({
  username: yup.string().required().length(20),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(20),
  confirm: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Not Match"),
});
