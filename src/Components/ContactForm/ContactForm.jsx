import React from "react";
import "./ContactForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Error from "../Error/Error";
import Button from "../Button/Button";

function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    message: ""
  };

  const onSubmit = (value) => {
    console.log(value);
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
              <Field
                className="field"
                name="name"
                type="text"
                placeholder="Your full name"
              />
              <ErrorMessage name="name" component={Error} />
            </div>
            <div className="input-Box">
              <Field
                className="field"
                name="email"
                type="email"
                placeholder="Your email"
              />
              <ErrorMessage name="email" component={Error} />
            </div>
            <div className="input-Box">
              <Field
                className="textarea"
                as="textarea"
                name="message"
                type="text"
                placeholder="Your message"
              />
              <ErrorMessage name="message" component={Error} />
            </div>
            <div className="input-Box"></div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
