import React, { useState } from "react";
import { useFormik } from "formik";
import InputField from "./InputField"; 
import { contactValidationSchema } from "../../validations/contactFormValidations"; 
import Swal from 'sweetalert2';
import { customerMsg } from "../../server/service";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false); // Loading state

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
        setIsLoading(true); // Start loading
        const response = await customerMsg(values);
        console.log("Response:", response.data);

        Swal.fire({
          title: "Form Submitted!",
          text: "We will reach you soon!",
          icon: "success",
        });

        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        
        if (error.response && error.response.status === 429) {
          Swal.fire({
            title: "Limit Exceeded!",
            text: "Your response has been submitted successfully.",
            icon: "warning",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Something went wrong. Please try again!",
            icon: "error",
          });
        }
      } finally {
        setIsLoading(false); // Stop loading after response
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
        type="number"
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
        disabled={isLoading} // Disable button while loading
        className={`w-full text-lg font-semibold hover:font-bold bg-orange-400 text-white p-2 rounded hover:bg-secondary ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
