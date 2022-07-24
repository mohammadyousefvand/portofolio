import React from "react";
import "./ContactForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Error from "../Error/Error";
import Button from "../Button/Button";
import { FcOk } from "react-icons/fc";

function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    message: ""
  };

  const onSubmit = (value, onSubmitProps) => {
    console.log(value);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Not required"),
    email: Yup.string()
      .email("your email is not Valid")
      .required("Not required"),
    message: Yup.string().required("Not required")
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      className="form"
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form className="form">
            <div className="input-Box">
              <FcOk className="ok-icon" />
              <Field
                className={`field ${
                  formik.errors.name && formik.touched.name
                    ? "error-field"
                    : !formik.errors.name && formik.touched.name
                    ? "success-field"
                    : ""
                }`}
                name="name"
                type="text"
                placeholder="Your full name"
              />
              <ErrorMessage name="name" component={Error} />
            </div>
            <div className="input-Box">
              <Field
                className={`field ${
                  formik.errors.email && formik.touched.email
                    ? "error-field"
                    : !formik.errors.email && formik.touched.email
                    ? "success-field"
                    : ""
                }`}
                name="email"
                type="email"
                placeholder="Your email"
              />
              <ErrorMessage name="email" component={Error} />
            </div>
            <div className="input-Box">
              <Field
                className={`textarea ${
                  formik.errors.message && formik.touched.message
                    ? "error-field"
                    : !formik.errors.message && formik.touched.message
                    ? "success-field"
                    : ""
                }`}
                as="textarea"
                name="message"
                type="text"
                placeholder="Your message"
              />
              <ErrorMessage name="message" component={Error} />
            </div>
            <div className="input-Box">
              <Button
                width="100%"
                content="Send message"
                border="5px"
                type="submit"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
