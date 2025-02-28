import * as Yup from "yup";

export const contactValidationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z ]+$/, "Name must not contain special characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),

  message: Yup.string().required("Message is required"),
});
