import * as yup from "yup";

export const formValidation = yup.object({
  email: yup.string().email().required(),
  title: yup.string().required().min(2),
  message: yup.string().required().min(10),
});
