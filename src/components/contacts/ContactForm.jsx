import React from "react";
import { useFormik } from "formik";
import InputField from "./InputField"; 
import { contactValidationSchema } from "../../validations/contactFormValidations"; 
import Swal from 'sweetalert2';
import { customerMsg } from "../../server/service";


const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Send form data to backend
        const response = await customerMsg(values);
        console.log("Response:", response.data);

        // Show success alert
        Swal.fire({
          title: "Form Submitted!",
          text: "We will reach you soon!",
          icon: "success",
        });

        // Reset form fields after submission
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again!",
          icon: "error",
        });
      }
    },
  });

  return (
    <form className="max-w-lg mx-auto" onSubmit={formik.handleSubmit}>
      <InputField
        label="Name"
        type="text"
        name="name"
        placeholder="Your name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
      />
      <InputField
        label="Phone"
        type="text"
        name="phone"
        placeholder="Your phone number"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && formik.errors.phone}
      />
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 mb-2">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your message"
          rows="4"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500 text-sm">{formik.errors.message}</div>
        )}
      </div>
      <button
        type="submit"
        className="w-full text-lg font-semibold hover:font-bold bg-orange-400 text-white p-2 rounded hover:bg-secondary"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
