import React, { useState } from "react";
import "./ContactForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Error from "../Error/Error";
import Button from "../Button/Button";
import { FcOk, FcLike } from "react-icons/fc";
import axios from "axios";

function ContactForm() {
  const [isSend, setIsSend] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    message: ""
  };

  const resetisSend = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(setIsSend(false));
      }, time);
    });
  };

  const onSubmit = (values, onSubmitProps) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xpzbvoep",
      data: values
    })
      .then((response) => {
        console.log(response);
        setIsSend(true);
        onSubmitProps.resetForm();
        resetisSend(5000);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
        return (
          <Form className="form">
            <div className="input-Box">
              {!formik.errors.name && formik.touched.name && (
                <FcOk className="ok-icon" />
              )}
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
              {!formik.errors.email && formik.touched.email && (
                <FcOk className="ok-icon" />
              )}
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
              {!formik.errors.message && formik.touched.message && (
                <FcOk className="ok-icon" />
              )}
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
              {isSend && (
                <div className="flex g-5 thankyou-box">
                  <span className="thankyou-message">
                    Thank you for message
                  </span>
                  <FcLike className="thankyou-icon" />
                </div>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
