// src/validation/contactValidation.js
import * as Yup from 'yup';

const phoneRegExp = /^([0]?[6-9]{1})([0-9]{9})$/;

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  message: Yup.string(),
});