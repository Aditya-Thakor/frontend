import * as yup from "yup";
import { registerInterface } from "../modals/RegisterInterface";
const FILE_MAX_SIZE = 1024 * 1024;
const FILE_TYPE = ["image/jpg", "image/jpeg", "image/png"];
export const registerSchema: yup.ObjectSchema<registerInterface> = yup
  .object()
  .shape({
    username: yup.string().required().max(20).min(3),
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(20),
    confirm: yup.string().required(),
  });

export const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(20),
});

export const addProductSchema = yup.object().shape({
  product_title: yup.string().required(),
  product_desc: yup.string().required(),
  product_image: yup.mixed().required(),
  product_category: yup.string().required(),
  product_price: yup.number().required().min(500).integer().positive(),
});
