import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact flex w-full p-x">
      <span className="contact-title ">Contact me</span>
      <div className="contact-wrapper flex">
        <div className="contact-info-wrapper flex">
          <span>...</span>
        </div>
        <div className="contact-field-wrapper flex">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
